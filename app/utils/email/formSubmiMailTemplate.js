/**
 *
 * @param info {{header, title, content, link, button_text, extra}}
 * @returns {string}
 */
const {germanTimeFormat, germanDateFormat} = require('../../utils');

module.exports = (info) => {
    return `
<style>
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700,800');

    .mail-container {
        margin: 0 auto;
        padding-top: 50px;
        width: 100%;
        max-width: 720px;
        text-align: center;
    }
    .logo-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;
        background-color: #4473c5;
    }
    .mail-header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px;
        font-size: 36px;
        font-weight: 600;
        color: #a5a5a5
    }
    .mail-content {
        padding-bottom: 20px;
        font-size: 20px;
    }
    .link-button {
        background-color: #4473c5;
        border-radius: 8px;
        width: 50%;
        padding: 10px 0;
        color: #f1f1f1
    }
    .link {
        display: flex;
        justify-content: center;
    }
    a {
        text-decoration: none;
    }
    .mail-footer {
        background-color: #c5c5c5;
        padding: 10px;
        margin-top: 40px;
        color: #555555;
        text-align: left;
    }
    .mail-value {
        font-size: 40px;
        color: #009EC0;
    }
    .paragraph {
        padding: 12px 0;
    }
    p {
        font-size: 12px;
    }

</style>
<body style="font-family: Poppins, sans-serif; background-color: #e8e5ea;">
<div class="mail-container">
    <div>
        <p>Termin Bestätigung /  Appointment Confirmation</p>
        <p class="paragraph">Vielen Dank für Ihre Buchung.</p>
        <div class="paragraph">
            <p>Ihre Terminanfrage ist bei uns eingegangen.</p>
            <p>Im Folgenden finden Sie eine Übersicht zu Ihrem Termin.</p>
        </div>
        <div class="paragraph">
            <p>Buchungsnummer : ${info.id}</p>
            <p>Vorname: ${info.firstName}</p>
            <p>Nachname: ${info.lastName}</p>
            <p>Email: ${info.email}</p>
            <p>Telefonnummer: ${info.phoneNumber}</p>
            <p>Geschlecht: ${info.gender}</p>
            <p>Anschrift: ${info.address}</p>
            <p>PLZ: ${info.zipcode}</p>
            <p>Stadt: ${info.street}</p>
            <p>Geburtsdatum: ${germanDateFormat(info.birthDay)}</p>
            <p>Testort: ${info.testCenterAddress}</p>
            <p>Datum: ${germanDateFormat(info.bookingDate)}</p>
            <p>Uhrzeit: ${info.bookingTime}</p>
        </div>
        <div class="paragraph">
            <p>Bitte bringen Sie zum Test ein offizielles Ausweisdokument mit Lichtbild (Personalausweis oder Reisepass) mit.</p>
        </div>
        <div class="paragraph">
            <p>Mit freundlichen Grüßen</p>
            <p>Ihr Covidtest4u Team</p>
        </div>
    </div>
</div>
</body>
	`;
};
