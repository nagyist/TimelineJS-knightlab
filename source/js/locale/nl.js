// @codekit-prepend "VMM.Timeline.js";
/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		date: {
			month: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
			month_abbr: ["jan", "febr", "ma", "apr", "mei", "juni", "juli", "aug", "sept", "okt", "nov", "dec"],
			day: ["zondag","maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
			day_abbr: ["zo","ma", "di", "wo", "do", "vr", "za"],
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d mmm",
			full: "d mmmm yyyy",
			time_no_seconds_short: "HH:MM",
			time_no_seconds_small_date: "HH:MM'<br/><small>'d mmmm yyyy'</small>'",
			full_long: "dddd',' d mmm yyyy 'um' HH:MM",
			full_long_small_date: "HH:MM'<br/><small>'dddd',' d mmm yyyy'</small>'",
		},
		messages: {
			loading_timeline: "Tijdlijn laden ... ",
			return_to_title: "Terug naar het begin",
			expand_timeline: "Tijdlijn uitzoomen",
			contract_timeline: "Tijdlijn inzoomen"
		}
	}
}