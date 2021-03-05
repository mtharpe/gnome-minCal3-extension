const Main = imports.ui.main;
const Calendar = imports.ui.calendar;

function init()
{
	//
}

function enable()
{
	let eventSource = new Calendar.EmptyEventSource();
	Main.panel.statusArea.dateMenu._setEventSource(eventSource);
}

function disable()
{
	let eventSource;
	let showEvents = Main.sessionMode.showCalendarEvents;
	if (showEvents)
	{
		eventSource = new Calendar.DBusEventSource();
	} else
	{
		eventSource = new Calendar.EmptyEventSource();
	}
	Main.panel.statusArea.dateMenu._setEventSource(eventSource);
}