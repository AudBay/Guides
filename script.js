const guides = {
    oticon: {
        title: "Oticon Hearing Aid & App Guide",
        sections: [
            {
                heading: "Ear Identification",
                content: "Your hearing aids are color-coded to help you identify which side is which:\n• Left Ear = Blue\n• Right Ear = Red"
            },
            {
                heading: "Power & Charging",
                content: "Automatic Method: Place your hearing aids in the charger to turn them off. When you remove them, they will turn back on automatically. No button presses are needed when using the charger.\n\nLights Guide: Amber = Charging | Green = Fully Charged\n\nManual Method (Without Charger): Press and hold the button for 3 seconds to turn off (amber light). Press and hold for 2 seconds to turn on (green light)."
            },
            {
                heading: "Maintenance",
                content: "• Domes: Wipe the silicone dome every night with a clean wipe. Change the dome every 3 months.\n• Microphones: Use the brush and cloth to clean the microphone openings every couple of weeks."
            },
            {
                heading: "Changing the Wax Filter",
                content: "If the sound is quiet or weak, the filter may be blocked:\n1. Use the tool provided: the empty side removes the old filter, and the other side holds the new one.\n2. Press the empty side into the filter in the wire to remove it.\n3. Push the new filter into the wire and discard the tool."
            },
            {
                heading: "Using the App",
                content: "1. Programs (If Applicable): If you have extra settings, swipe across the top to change them.\n2. Volume: Slide up or tap (+) for louder, and down or (-) for quieter.\n3. Mute & Split: Tap the speaker icon to mute. Tap the bars to adjust each ear independently.\n4. Equalizer: Tap the sliders icon to adjust the sound pitch.\n\nAdjusting the sound: If it sounds 'tinny,' lower the volume slightly or use the Equalizer to reduce the High frequencies. Tap 'Restore Default' to reset."
            },
            {
                heading: "Battery & Location",
                content: "1. Battery Life: Check the percentage and remaining hours for both hearing aids.\n2. Find My Hearing Aids: Shows the last location where your aids were connected to your phone.\n\nLost Devices: The app shows the last known location while connected. It does not track the hearing aid live if it is moved after losing connection."
            }
        ]
    },
    starkey: {
        title: "Starkey Hearing Aid & App Guide",
        sections: [
            {
                heading: "Power & Charging",
                content: "Place your hearing aids securely in the Starkey charger to power them down and begin charging."
            },
            {
                heading: "Using the My Starkey App",
                content: "[Insert your specific Starkey app instructions here]"
            }
        ]
    },
    widex: {
        title: "Widex Hearing Aid & App Guide",
        sections: [
            {
                heading: "Power & Charging",
                content: "Place your hearing aids in the Widex charging port. Ensure they are seated correctly to begin the charging process."
            },
            {
                heading: "Using the Widex App",
                content: "[Insert your specific Widex app instructions here]"
            }
        ]
    }
};

function loadGuide(brand) {
    const container = document.getElementById('guide-content');
    const data = guides[brand];
    
    // Update active button state
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${brand}`).classList.add('active');
    
    // Generate HTML content
    let html = `<h2>${data.title}</h2>`;
    data.sections.forEach(sec => {
        // Convert line breaks in the string to HTML breaks for proper formatting
        const formattedContent = sec.content.replace(/\n/g, '<br>');
        html += `
            <section class="guide-section">
                <h3>${sec.heading}</h3>
                <p>${formattedContent}</p>
            </section>
        `;
    });
    
    container.innerHTML = html;
}

// Automatically load the Oticon guide when the page first opens
window.onload = () => loadGuide('oticon');
