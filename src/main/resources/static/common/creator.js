$(document).ready(function() {
    // Initialize select2
    $('.select2').select2();

    const lightingOptions = [
        // 🌅 Natural & Environmental Light
        'Golden Hour',
        'Blue Hour (cool twilight tones)',
        'Bright Daylight',
        'Overcast / Diffused Natural Light',
        'Cloudy Soft Light',
        'Dappled Sunlight (through leaves or patterns)',
        'Moonlight',
        'Candlelight',
        'Firelight / Campfire glow',
        'Neon',
        
        // 🎭 Cinematic & Dramatic Styles
        'Moody',
        'Dramatic Shadows',
        'Chiaroscuro',
        'Low-Key Lighting',
        'High-Key Lighting',
        'Volumetric Lighting (light beams, atmospheric haze)',
        'Rim Light',
        'Backlight',
        'Silhouette Lighting',
        'Edge Lighting',
        'Practical Lighting (visible lamps, signs in frame)',
        
        // 💡 Studio & Controlled Lighting
        'Soft Key Light',
        'Hard Light',
        'Top Light',
        'Underlighting',
        'Butterfly Lighting (Paramount style)',
        'Rembrandt Lighting (triangle cheek light)',
        'Split Lighting (half face lit)',
        'Clamshell Lighting (beauty portrait setup)',
        'Three-Point Lighting',
        'Ring Light Glow',
        'Fill Light Bounce',
        'Spotlight Isolation',
    ];

    const styleOptions = [
        'Cinematic (CGI)',
        'Anime',
        'Manga',
        'Comic book / Graphic novel',
        'Digital painting',
        'Matte painting',
        'Fantasy illustration',
        'Concept art',
        'Pixar-style 3D',
        'Claymation / Stop-motion CGI',
        'Low-poly',
        'Isometric art',
        'Surrealist illustration',
        'Minimalist vector art',
        'Cel-shaded 3D',
        'Steampunk art',
        'Vaporwave / Synthwave aesthetic',
        'Cyberpunk',
        'Retro arcade pixel art',
        'Cinematic (photographic)',
        'Documentary',
        'Film noir',
        'Street photography',
        'Portrait photography',
        'Editorial fashion',
        'Studio lighting',
        'Natural light',
        'Macro photography',
        'Sports/action photography',
        'Architectural photography',
        'Landscape / nature photography',
        'Black & white',
        'Sepia tone',
        'HDR (High Dynamic Range)',
        'Polaroid / instant film look',
        'Vintage film (35mm, 16mm)',
        'Overexposed / light leak aesthetic',
        'Underwater photography',
        'Night photography / low light',
    ];

    const nsfwProtagonistActionOptions = [
        'Giving a blowjob', 'Singing', 'Touching own lips', 'Touching own breasts', 'Slowly undressing', 'Lounging on a bed leg spread', 'Sharing an intense, intimate gaze',
        'Whispering a secret', 'Caressing own skin','Caressing her pussy', 'A passionate kiss', 'lying on her back legs spread', 'On all fours'
        ,'Fingering her pussy', 'Sqatting over dildo', 'Squatting over penis', 'Penis in vagina','Penis in anus','Doggystyle','Fucked from behind','cumshot on face', 
        'Leaning against a rain-streaked window', 'Cumshot in ass', 'Facial cumshot', 'Handjob', 'Facefucked' 
        ,'Deepthroat', 'Applying perfume to neck', 'Lighting a cigarette in a dark room', "Squating", 
    ];

    const cameraAngleOptions = [
        'Wide Shot', 'Extreme Wide Shot', 'Medium Shot', 'Close-up', 'Extreme Close-up',
        'Low-Angle Shot', 'High-Angle Shot', 'Dutch Angle', 'Over-the-Shoulder Shot',
        'First-Person View (FPV)', "Bird's-Eye View", "Worm's-Eye View"
    ];

    const cameraAdvanced = [
        'Slow dolly in, camera moves slowly forward toward the subject',
        'Slow dolly out, camera moves slowly backwards away from the subject',
        'Fast dolly in, camera moves rapidly forward toward the subject, urgent motion.',
        'Vertigo effect, dolly zoom, camera moves backward while zooming in, background expands.',
        'Extreme macro zoom, zoom transition from subject to micro details of surface.',
        'Cosmic hyper zoom, fast zoom transition from extreme wide view down to macro level.',
        'Over the shoulder shot, camera mounted behind subject A framing subject B.',
        'Fisheye lens, extreme wide-angle distortion, circular frame.',
        'Wipe movement, camera slides laterally from behind foreground object to reveal the scene.',
        'Fly through, camera moves through an opening into the scene.',
        'Rack focus, start completely out of focus, slowly pull focus until sharp.',
        'Rack focus, focus shifts from the foreground object to the background subject.',
        'Tilt up, camera pans vertically up from bottom to top.',
        'Tilt down, camera pans vertically down from top to bottom.',
        'Truck left, camera moves sideways on a track to the left.',
        'Truck right, camera moves sideways on a track to the right.',
        'Orbit 180, camera moves in a half-circle around the subject.',
        'Fast 360 orbit, camera spins rapidly 360 degrees around the subject.',
        'Slow cinematic arc, camera moves in a wide curve to reveal side profile.',
        'Pedestal down, camera lowers vertically straight down.',
        'Pedestal up, camera rises vertically straight up from waist to eye level.',
        'Crane up, camera lifts high into the air.',
        'Crane down, camera descends slowly to the subject.',
        'Smooth optical zoom in, lens magnifies subject, camera stays stationary.',
        'Smooth optical zoom out, lens widens, background becomes blurry.',
        'Snap zoom, crash zoom, rapid zoom directly into the eyes.',
        'Drone fly over, high altitude flight moving forward over the landscape.',
        'Epic drone reveal, rising and tilting down to reveal the scene.',
        'Large scale drone orbit, massive sweeping circle around the landscape.',
        'Top down shot, camera pointing straight down, slow twist.',
        'FPV drone dive, aggressive diving motion down a vertical structure.',
        'Handheld camera, shaky motion, natural movement, documentary style.',
        'Whip pan, camera whips violently to the side with extreme directional motion blur.',
        'Dutch angle, camera roll, tilted sideways on Z-axis.',
        'Leading shot, camera moves backward matching the subject speed.',
        'Following shot, camera follows behind the subject matching speed.',
        'Side tracking, camera trucks alongside the subject.',
        'POV walk, first person camera moving forward with bobbing motion.',
        'Hyperlapse, camera moves forward rapidly, time accelerated, fast motion, light trails.',
        'Barrel roll, camera spins 360 degrees clockwise while moving forward, disorienting.',
        'Bullet time, frozen moment, ultra slow motion, camera orbit right.',
        'Worms eye view, low angle tracking, camera moves along the ground looking up.'
    ]

    const cameraMovementOptions = [
        'Locked-off tripod shot',
        'Static wide shot',
        'Static close-up',
        "Static overhead / bird's-eye view",
        "Static low angle / worm's-eye view",
        'Static Dutch tilt (angled horizon)',
        'Symmetrical frontal shot',
        'Slow push-in (dolly in)',
        'Slow pull-out (dolly out)',
        'Steadicam tracking forward',
        'Steadicam tracking backward',
        'Side-to-side tracking (dolly left/right)',
        'Slow crane up (revealing)',
        'Crane down to subject',
        'Push-in + tilt up combo',
        'Orbiting shot (circular movement around subject)',
        'Parallax tracking (foreground/background shift)',
        'Slow truck + pan',
        'Lateral slider movement',
        'Following handheld shot',
        'Low tracking shot along ground',
        'Pedestal rise or drop',

        'Handheld shaky cam (documentary style)',
        'Smooth gimbal movement',
        'Whip pan (fast blur transition)',
        'Rack focus during movement',
        'Slow 360° rotation around subject',
        'Vertigo shot / dolly zoom (Hitchcock effect)',
        'Over-the-shoulder tracking shot',
        'POV walking shot',
        'POV falling shot (camera tilts and drops)',
        'First-person “headcam” movement',
        'Overhead drone pull-away',
        'Drone fly-through (narrow space)',
        'Underwater tracking',
        'Long take / continuous uncut shot',
    ];

    const cameraDeviceGroups = [
      {
        label: '📱 Cell Phone Styles',
        options: [
          'iPhone 15 Pro Max (48MP, cinematic mode)',
          'iPhone 14 Pro (natural HDR look)',
          'iPhone 11 (softer colors, less dynamic range)',
          'Google Pixel 8 Pro (computational photography sharpness)',
          'Google Pixel 6 (contrasty HDR+)',
          'Samsung Galaxy S24 Ultra (200MP detail, saturated colors)',
          'Samsung Galaxy S10 (early AI processing look)',
          'Nokia Lumia 1020 (oversized sensor vintage mobile look)',
          'Motorola Razr V3 (low-res, 2000s flip-phone aesthetic)',
          'Early 2010s Android (grainy, overexposed night shots)'
        ],
      },
      {
        label: '🎞 Analog / Film Cameras',
        options: [
          'Polaroid SX-70 (instant film, warm soft focus)',
          'Polaroid 600 (classic 80s/90s instant film look)',
          '35mm Kodak Gold 200 (warm consumer film)',
          '35mm Fuji Superia 400 (cooler tones, grainy)',
          '35mm Ilford HP5 (black & white, high contrast)',
          '120mm Medium Format Hasselblad 500C/M (rich tonal range)',
          'Super 8mm film camera (grainy motion, vintage warmth)',
          '16mm film (documentary/indie look)',
          'Large format 4x5 camera (razor sharp, shallow depth of field)',
          'Lomography Diana F+ (plastic lens, dreamy vignetting)'
        ],
      },
      {
        label: '🎥 High-End Digital Cinema Cameras',
        options: [
          'ARRI Alexa 35 (cinema-grade dynamic range) + Master Prime lens',
          'ARRI Alexa Mini LF + Cooke Anamorphic/i lens (cinematic flares, oval bokeh)',
          'RED Komodo 6K + Canon CN-E cine lens (crisp, clinical detail)',
          'RED V-Raptor 8K VV + Sigma Cine Prime (hyper-detailed large format)',
          'Sony Venice 2 + Zeiss Supreme Prime (film-like smoothness)',
          'Canon C300 Mark III + Canon L-Series zoom (docu-style versatility)',
          'Blackmagic URSA Mini Pro 12K + Tokina Vista Prime (ultra-high-res clarity)',
          'Panasonic Varicam LT + Fujinon Cabrio zoom (broadcast cinematic look)',
          'Leica SL2-S + Leica Noctilux (luxury photography aesthetic)',
          'Hasselblad X2D 100C + XCD 80mm f/1.9 (medium-format depth)'
        ],
      },
    ];
    const nsfwStyleGroups = [
      {
        label: '💫 Soft & Suggestive',
        options: [
          'Sensual',
          'Intimate Portrait',
          'Boudoir',
          'Soft-focus Dream',
          'Romantic Glow',
          'Suggestive Tease',
          'Lingerie Editorial',
          'Playful Pin-up',
          'Voyeuristic Glimpse',
        ],
      },
      {
        label: '🔥 Erotic & Provocative',
        options: [
          'Erotic',
          'Provocative',
          'Dark Fantasy',
          'Arthouse Erotic',
          'Taboo',
          'Fetish Fashion',
          'Striptease Moment',
          'Erotic Dance',
          'Zoophilia',
          'Body Worship',
          'Teasing Reveal',
        ],
      },
      {
        label: '🎭 Stylized Erotic Genres',
        options: [
          'Gritty Realism',
          'Film Noir Erotic',
          'Neo-Noir Erotic',
          'Baroque Sensuality',
          'Giallo Erotic Horror',
          'FemDom Focus',
          'Submissive Perspective',
          'Roleplay Scenario (nurse, teacher, maid, etc.)',
        ],
      },
    ];

    function populateSelect(selectId, options) {
        const select = $(`#${selectId}`);
        options.forEach(option => {
            select.append(new Option(option, option, false, false));
        });
    }

    function populateSelectWithGroups(selectId, groups) {
        const select = $(`#${selectId}`);
        groups.forEach(group => {
            const optgroup = $(`<optgroup label="${group.label}"></optgroup>`);
            group.options.forEach(option => {
                optgroup.append(new Option(option, option, false, false));
            });
            select.append(optgroup);
        });
    }

    populateSelect('lighting', lightingOptions);
    populateSelect('style', styleOptions);
    populateSelectWithGroups('style', nsfwStyleGroups);
    populateSelect('protagonist-action', nsfwProtagonistActionOptions);
    populateSelect('camera-angle', cameraAngleOptions);
    populateSelect('camera-movement', cameraMovementOptions);
    populateSelectWithGroups('camera-device', cameraDeviceGroups);
    
    $('#prompt-form').on('submit', function(e) {
        e.preventDefault();
        $('#generate-button').prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Generating...');

        const payload = {
            scene: $('#scene').val(),
            lighting: $('#lighting').val(),
            style: $('#style').val(),
            protagonistAction: $('#protagonist-action').val(),
            cameraAngle: $('#camera-angle').val(),
            cameraMovement: $('#camera-movement').val(),
            cameraDevice: $('#camera-device').val(),
            isNsfw: true
        };

        $.ajax({
            url: '/creator/generate',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(payload),
            success: function(response) {
                $('#result-container').html('<div class="alert alert-success">' + response + '</div>');
                $('#generate-button').prop('disabled', false).html('Generate Prompts');
            },
            error: function(xhr, status, error) {
                $('#result-container').html('<div class="alert alert-danger">Error: ' + error + '</div>');
                $('#generate-button').prop('disabled', false).html('Generate Prompts');
            }
        });
    });
});


