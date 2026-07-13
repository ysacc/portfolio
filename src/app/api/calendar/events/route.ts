import { NextRequest, NextResponse } from "next/server";
import { getCalendarSampleEvents, sortCalendarEvents, validateEnvironment } from "@/lib/focus";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const days = Number(searchParams.get("days") ?? "7");
  const maxResults = Number(searchParams.get("maxResults") ?? "10");
  const timezone = process.env.APP_TIMEZONE ?? "America/Lima";
  const envCheck = validateEnvironment(process.env);

  if (!envCheck.isValid) {
    const events = getCalendarSampleEvents(days, maxResults, timezone);
    return NextResponse.json({
      events,
      updatedAt: new Date().toISOString(),
      source: "sample",
      warning: `Faltan variables de entorno: ${envCheck.missing.join(", ")}`,
    });
  }

  try {
    const calendarId = process.env.GOOGLE_CALENDAR_ID ?? "primary";
    const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?maxResults=${maxResults}&orderBy=startTime&singleEvents=true&timeZone=${encodeURIComponent(timezone)}`, {
      headers: {
        Authorization: `Bearer ${process.env.GOOGLE_REFRESH_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Google Calendar respondió con ${response.status}`);
    }

    const payload = await response.json();
    const events = (payload.items ?? [])
      .filter((event: Record<string, unknown>) => event.status !== "cancelled")
      .map((event: Record<string, unknown>) => {
        const start = event.start as { dateTime?: string; date?: string } | undefined;
        const end = event.end as { dateTime?: string; date?: string } | undefined;
        return {
          id: event.id as string,
          title: (event.summary as string) || "Sin título",
          description: (event.description as string) || "",
          start: start?.dateTime ?? start?.date ?? "",
          end: end?.dateTime ?? end?.date ?? "",
          allDay: Boolean(start?.date),
          location: (event.location as string) || "",
          meetingUrl: ((event.conferenceData as { entryPoints?: Array<{ uri?: string }> } | undefined)?.entryPoints?.[0]?.uri) || "",
          calendarId: calendarId,
          htmlLink: (event.htmlLink as string) || "",
        };
      });

    return NextResponse.json({
      events: sortCalendarEvents(events).slice(0, maxResults),
      updatedAt: new Date().toISOString(),
      source: "google",
    });
  } catch (error) {
    const events = getCalendarSampleEvents(days, maxResults, timezone);
    return NextResponse.json({
      events,
      updatedAt: new Date().toISOString(),
      source: "sample",
      warning: error instanceof Error ? error.message : "No se pudo cargar Google Calendar",
    });
  }
}
