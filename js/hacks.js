/**
 * LIFE HACKS — content registry.
 * ────────────────────────────────────────────────────────────────────────
 * This is the ONLY file you edit to add a new life hack. Append an object to
 * the HACKS array and it appears on the site automatically (card + detail
 * page + search). No build step required.
 *
 * Hack shape:
 *   id            unique slug (lowercase-with-dashes) — used in the URL (#/hack/<id>)
 *   title         short display title
 *   emoji         one emoji shown on the card
 *   summary       one-sentence teaser for the card
 *   tags          array of keywords (also used by search)
 *   difficulty    'Easy' | 'Medium' | 'Advanced'
 *   time          human estimate, e.g. '10 min'
 *   updated       ISO date string 'YYYY-MM-DD'
 *   hero          optional image path (assets/…)
 *   safety        optional array of caution strings (rendered as a warning box)
 *   materials     optional array of strings (rendered as a checklist)
 *   why           optional array of paragraphs explaining WHY it works
 *   steps         array of { title, body, img? } — the walkthrough
 *   sources       optional array of { label, url }
 *   related       optional array of { label, url } (e.g. link back to a product)
 * ────────────────────────────────────────────────────────────────────────
 */

export const HACKS = [
  {
    id: 'diy-capacitive-stylus',
    category: 'Maker',
    title: 'DIY Capacitive Stylus (from a pen + a fuse)',
    emoji: '🖊️',
    summary: 'Turn an old clicky pen and a glass electronics fuse into a smooth, dry stylus for phones and tablets — perfect as an AFTERGLOW pen.',
    tags: ['stylus', 'diy', 'touchscreen', 'tablet', 'phone', 'afterglow', 'drawing', 'capacitive'],
    difficulty: 'Easy',
    time: '10–15 min',
    updated: '2026-08-04',
    hero: 'assets/hack-stylus-hero.png',
    safety: [
      'Ensure the metal end-cap of the fuse is perfectly smooth — no sharp stamps, manufacturing burrs, or solder blobs — so it never scratches your glass. Sand it lightly if needed.',
      'This works with the tiny static charge naturally in your body. Never connect a homemade stylus to any battery or power source.',
      'Handle the glass fuse gently; if it cracks, discard it and use a new one.'
    ],
    materials: [
      'A plastic clicky pen with a wide opening at the tip',
      'A glass cartridge fuse that fits snugly through the pen-tip opening',
      'A thin, uninsulated (bare) metal wire — copper or craft wire — or a strip of aluminium foil',
      'Tape or hot glue'
    ],
    why: [
      'Modern phone and tablet screens are capacitive touchscreens. They react to a conductive material with a contact area of roughly ¼ inch that can disrupt the screen\'s electrostatic field.',
      '“Having a stylus that is about ¼ inch wide will ensure that there is enough surface area to be detected.” — Make:',
      'The smooth metal end-cap of a standard glass electronics fuse is almost exactly that size and material, so it mimics a human fingertip — but without needing any moisture.',
      'That\'s why this beats a wet-sponge or foil-ball stylus: it never dries out, has a much sturdier tip for drawing, and won\'t leave water streaks on your screen.'
    ],
    steps: [
      { title: 'Disassemble the pen',
        body: 'Remove the ink reservoir, spring, and clicking mechanism. You only need the empty plastic barrel.' },
      { title: 'Inspect the fuse',
        body: 'Check the metal end-caps of your glass fuse. Make sure both are completely smooth and free of sharp stamps, burrs, or solder blobs that could scratch your screen. A few seconds with fine sandpaper fixes rough spots.' },
      { title: 'Connect the wire',
        body: 'Wrap one end of the bare wire tightly around the glass body or one of the metal caps of the fuse. If you\'re using foil instead, wrap a thin strip of foil tightly around the fuse.' },
      { title: 'Thread the pen',
        body: 'Thread the free end of the wire (or foil strip) up through the inside of the pen barrel and out through the top or the side.' },
      { title: 'Position the tip',
        body: 'Push the fuse into the front tip of the pen so one smooth metal cap sticks out like a pen nib. Lock it firmly in place with a drop of hot glue or a bit of tape around the base.',
        img: 'assets/step-diagram.png' },
      { title: 'Secure the handle',
        body: 'Wrap the remaining wire (or foil) tightly around the outside of the pen where your fingers naturally rest.' },
      { title: 'Test it',
        body: 'Hold the pen so your bare skin touches the external wire. Your body\'s natural charge travels down the wire into the metal tip, registering a smooth, dry stroke. Open AFTERGLOW and paint some light with your new pen!' }
    ],
    sources: [
      { label: 'Make: — capacitive stylus surface-area guidance', url: 'https://makezine.com/' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  }

  // ── Add your next life hack below this line ──────────────────────────────
  ,
  {
    id: 'foil-wifi-booster',
    category: 'Tech',
    title: 'Tin-foil Wi-Fi Booster',
    emoji: '📶',
    summary: 'A curved sheet of kitchen foil behind your router reflects the signal toward the rooms you actually use — a free 5-minute range boost.',
    tags: ['wifi', 'router', 'foil', 'signal', 'internet', 'diy', 'antenna', 'reflector', 'home'],
    difficulty: 'Easy',
    time: '5 min',
    updated: '2026-08-05',
    hero: 'assets/hack-wifi-hero.png',
    safety: [
      'Keep the foil a few centimetres clear of the antennas and any vents — never let it touch the router\'s ports or block its cooling.',
      'Don\'t cover the router in foil. You only want a reflector standing behind it, not a wrap around it.',
      'This shapes existing signal; it can\'t create coverage the router never had. For whole-home fixes a mesh system or repeater is still king.'
    ],
    materials: [
      'A sheet of aluminium foil (roughly A4 / letter size)',
      'A piece of thin card or an old cereal box for backing',
      'Sticky tape',
      'Scissors'
    ],
    why: [
      'Most home routers spray Wi-Fi in every direction — including out of the window and into the walls, where it\'s wasted.',
      'A metal surface reflects radio waves. Curving a foil-covered card into a gentle parabola behind the antennas catches the backward-going signal and bounces it forward, concentrating more of it toward one direction.',
      'Because you\'re redirecting signal rather than adding power, the gain shows up as steadier bars and speed in the room you aim at — often at the cost of the room directly behind the foil, which is exactly the trade you want.',
      'It\'s the same principle as a satellite dish or a torch reflector: a curved reflective surface focuses waves that would otherwise scatter.'
    ],
    steps: [
      { title: 'Cut your backing', body: 'Cut the card to roughly the height of your router\'s antennas and about twice as wide, so it can curve around behind them.' },
      { title: 'Cover it in foil', body: 'Wrap or tape a smooth layer of foil over one side of the card. The shiny, flat side will face your router — smoother foil reflects better.' },
      { title: 'Curve it into an arc', body: 'Gently bow the card into a shallow C-shape (a parabola). Tape a small tab or fold the base so it stands up on its own.' },
      { title: 'Place it behind the antennas', body: 'Stand the curved reflector directly behind the router with the foil facing the direction you want stronger signal — e.g. toward your sofa, bedroom, or desk. Keep it a few cm clear of the antennas.',
        img: 'assets/hack-wifi-hero.png' },
      { title: 'Aim and test', body: 'Run a quick speed test or watch your bars in the target room, then nudge the angle and curve until it peaks. Small adjustments make a surprising difference.' }
    ],
    sources: [
      { label: 'Research: directional "virtual" reflectors improve Wi-Fi coverage (WiPrint / Dartmouth-Columbia study)', url: 'https://en.wikipedia.org/wiki/Parabolic_reflector' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  },
  {
    id: 'sharpen-scissors-with-foil',
    category: 'Home',
    title: 'Sharpen Scissors with Kitchen Foil',
    emoji: '✂️',
    summary: 'Bring dull scissors back to life in under a minute by cutting through folded aluminium foil — no sharpening stone needed.',
    tags: ['scissors', 'foil', 'sharpen', 'kitchen', 'diy', 'blade', 'quick', 'home'],
    difficulty: 'Easy',
    time: '2 min',
    updated: '2026-08-05',
    hero: 'assets/hack-scissors-hero.png',
    safety: [
      'Cut away from your body and keep fingers clear of the blades.',
      'The foil strips have freshly cut edges — they can be a little sharp, so bin them carefully.',
      'This tunes up a slightly dull edge; badly chipped or rusted blades need a proper sharpener.'
    ],
    materials: [
      'A sheet of aluminium foil (about 30 cm / 12 in long)',
      'The dull scissors you want to sharpen',
      'A dry cloth or paper towel'
    ],
    why: [
      'Foil is soft aluminium, so it won\'t damage steel scissor blades — but dragging the cutting edges across it does two useful things.',
      'It burnishes the very edge, smoothing away microscopic burrs and rolled spots that build up with use and make scissors feel "dull".',
      'The mild abrasion also polishes the bevel slightly, realigning the edge so the two blades shear cleanly against each other again.',
      'It won\'t restore a truly damaged edge, but for everyday bluntness it\'s astonishingly effective for the effort.'
    ],
    steps: [
      { title: 'Fold the foil', body: 'Fold your sheet of foil lengthways several times into a thick strip of 6–8 layers. More layers means more cutting edges working at once.' },
      { title: 'Make full-length cuts', body: 'Cut through the folded foil using the whole length of the blades, from base (near the pivot) to tip, not just short snips.',
        img: 'assets/hack-scissors-hero.png' },
      { title: 'Repeat 10–15 times', body: 'Keep cutting steady, full strokes — about ten to fifteen passes. You\'ll often feel the action get smoother as you go.' },
      { title: 'Wipe the blades', body: 'Wipe both blades with a dry cloth to remove any tiny foil flecks so they don\'t transfer onto whatever you cut next.' },
      { title: 'Test on paper', body: 'Cut a sheet of paper. It should now slice cleanly all the way to the tip instead of folding or chewing. If not, give it another few passes.' }
    ],
    sources: [
      { label: 'Widely-tested household method — burnishing a steel edge on soft aluminium', url: 'https://en.wikipedia.org/wiki/Sharpening' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  },
  {
    id: 'regrow-veg-from-scraps',
    category: 'Money',
    title: 'Regrow Veg from Kitchen Scraps',
    emoji: '🌱',
    summary: 'Stop binning the ends of spring onions, lettuce and celery — pop them in water on a windowsill and grow free food again and again.',
    tags: ['regrow', 'vegetables', 'scraps', 'kitchen', 'garden', 'save money', 'food', 'windowsill', 'sustainable', 'diy'],
    difficulty: 'Easy',
    time: '5 min + growing',
    updated: '2026-08-06',
    hero: 'assets/hack-regrow-hero.png',
    safety: [
      'Change the water every 1–2 days — cloudy or smelly water means bacteria; give the glass a rinse.',
      'If a scrap turns mushy, slimy or mouldy instead of sprouting, bin it and start fresh — don\'t eat it.',
      'Wash regrown greens before eating, just like shop-bought.'
    ],
    materials: [
      'Leftover vegetable bases: spring onion (scallion) root ends, a romaine/cos lettuce heart, or a celery base',
      'A small glass or jar',
      'Fresh water',
      'A sunny windowsill',
      'Optional: a small pot of soil to plant them on later'
    ],
    why: [
      'The base of many vegetables still contains the plant\'s growing point (the meristem) and, in root veg ends, dormant roots — the living tissue that produces new growth.',
      'Give that tissue what it lost when it was cut — water and light — and it simply carries on growing, pushing out fresh leaves and stalks from stored energy.',
      'Spring onions are the champions: the white root end regrows green tops in days and you can harvest repeatedly, so one bunch keeps giving for weeks.',
      'It costs nothing, cuts food waste, and turns offcuts you\'d have thrown away into a rolling free supply of garnish and greens.'
    ],
    steps: [
      { title: 'Save the right offcut', body: 'Keep the bottom ~3–5 cm of spring onions (with the stringy roots), the intact heart of a romaine lettuce, or the base of a celery bunch. Don\'t trim the roots off.' },
      { title: 'Stand it in water', body: 'Place the cut base root-down in a glass with about 2–3 cm of water — enough to cover the roots but not drown the top.',
        img: 'assets/hack-regrow-hero.png' },
      { title: 'Give it light', body: 'Put the glass on a bright, sunny windowsill. Warmth and light are what trigger new growth.' },
      { title: 'Refresh the water', body: 'Change the water every day or two to keep it clear and oxygenated — this is the single biggest thing that prevents rot.' },
      { title: 'Harvest or pot on', body: 'Spring onion tops are ready to snip in about a week — just cut what you need and let them regrow. Lettuce and celery push out tender new leaves from the centre; once roots are strong you can plant them in soil to keep them going long-term.' }
    ],
    sources: [
      { label: 'Plant meristem & vegetative regrowth (overview)', url: 'https://en.wikipedia.org/wiki/Meristem' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  },
  {
    id: 'diy-wool-dryer-balls',
    category: 'Money',
    title: 'DIY Wool Dryer Balls',
    emoji: '🧺',
    summary: 'Make reusable wool dryer balls that cut drying time, soften laundry and replace disposable dryer sheets — saving money load after load.',
    tags: ['laundry', 'dryer', 'wool', 'diy', 'save money', 'reusable', 'eco', 'dryer sheets', 'home'],
    difficulty: 'Easy',
    time: '30 min + felting',
    updated: '2026-08-06',
    hero: 'assets/hack-dryerballs-hero.png',
    safety: [
      'Use 100% wool yarn — synthetic/acrylic yarn will not felt and can melt in a hot dryer.',
      'Check the yarn is not labelled "superwash" or "machine washable"; that treatment stops wool from felting.',
      'If you like a scent, add just 1–2 drops of essential oil and let it dry before use — never soak the balls in oil, as concentrated oils on fabric in a hot dryer are a fire risk.'
    ],
    materials: [
      'A skein of 100% wool yarn (not superwash) — one skein makes several balls',
      'A pair of old tights, a leg of pantyhose, or a sock',
      'Cotton string or a few knots to tie sections',
      'Scissors',
      'Your washing machine and dryer (to felt them)'
    ],
    why: [
      'As the balls tumble, they bounce between layers of wet laundry, creating gaps so hot air circulates better — clothes dry noticeably faster, which uses less energy per load.',
      'That same tumbling agitation relaxes fibres and reduces static and wrinkles, so laundry comes out softer without any chemical softener.',
      'They replace single-use dryer sheets entirely: buy the wool once and reuse the balls for 1,000+ loads, so the cost per wash drops to almost nothing.',
      'Felting is the key step — repeated heat, moisture and agitation lock the wool fibres together into a dense, springy ball that won\'t unravel in the dryer.'
    ],
    steps: [
      { title: 'Wind a ball', body: 'Wrap wool yarn around two fingers about 15 times, slip it off, then wrap crossways around the middle. Keep wrapping in changing directions until you have a firm ball roughly the size of a tennis ball.' },
      { title: 'Secure the end', body: 'Tuck the loose end under several strands with your fingers or a crochet hook so it won\'t come loose. Make 3–4 balls in total for a normal load.',
        img: 'assets/hack-dryerballs-hero.png' },
      { title: 'Bag them up', body: 'Drop each ball into the leg of a pair of old tights and tie a tight knot with string between each one, so you end up with a "caterpillar" of separated balls.' },
      { title: 'Felt them', body: 'Run the whole string through a hot wash and then a hot dryer cycle (or a couple of cycles). The heat and agitation felt the wool so the strands fuse together.' },
      { title: 'Free and use', body: 'Snip the string and remove the balls — the surface should look fuzzy and matted, not stringy. Toss 3–4 into the dryer with every load. That\'s it: faster drying and no more dryer sheets.' }
    ],
    sources: [
      { label: 'Wool felting (how heat + agitation fuse fibres)', url: 'https://en.wikipedia.org/wiki/Felt' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  },
  {
    id: 'rescue-a-stuck-zip',
    category: 'Home',
    title: 'Rescue a Stuck Zip',
    emoji: '👖',
    summary: 'A jammed or sticky zip doesn\'t mean a ruined jacket or bag — rub a graphite pencil or bar of soap on the teeth and it glides again.',
    tags: ['zip', 'zipper', 'repair', 'clothes', 'bag', 'jacket', 'fix', 'save money', 'graphite', 'soap', 'diy'],
    difficulty: 'Easy',
    time: '2 min',
    updated: '2026-08-07',
    hero: 'assets/hack-zip-hero.png',
    safety: [
      'Be gentle — yanking a stuck slider can rip the teeth off the fabric, which is much harder to fix.',
      'Graphite can smudge, so on pale or delicate fabric use clear soap or lip balm instead of a pencil.',
      'If teeth are actually bent, ease them straight with pliers first; lubricant only fixes friction, not damage.'
    ],
    materials: [
      'A graphite pencil (a soft one, e.g. 2B, works best), OR',
      'A bar of dry soap, a white candle, or lip balm',
      'Optional: needle-nose pliers for bent teeth',
      'A cloth to wipe off any excess'
    ],
    why: [
      'Zips stick because of friction — grit, a rough spot, or a stiff slider gripping the teeth as it passes.',
      'Graphite is a natural dry lubricant: the "lead" in a pencil is soft carbon that slides between surfaces and reduces that friction without attracting dirt the way oil would.',
      'Soap, wax and lip balm work the same way — they coat the teeth with a slippery layer so the slider glides over them instead of catching.',
      'A two-minute rub can save a whole garment or bag from the bin, which is exactly the kind of tiny fix that adds up to real money over a year.'
    ],
    steps: [
      { title: 'Ease off the tension', body: 'Stop pulling hard. Hold the fabric flat on both sides of the slider so the teeth line up straight and aren\'t bunched.' },
      { title: 'Rub on the lubricant', body: 'Firmly scribble a graphite pencil back and forth over the teeth on both sides, right where the slider is stuck. No pencil? Rub a dry bar of soap, a candle, or lip balm along the teeth instead.',
        img: 'assets/hack-zip-hero.png' },
      { title: 'Work the slider gently', body: 'Wiggle the slider up and back in small movements — don\'t force it. As the lubricant works in, it should start to move more freely.' },
      { title: 'Free it fully', body: 'Once it loosens, run the slider slowly along the whole zip a couple of times to spread the lubricant over all the teeth.' },
      { title: 'Wipe and check', body: 'Wipe off any excess graphite or soap with a cloth. If the slider still gapes open after closing, gently squeeze its sides with pliers a tiny amount to restore its grip.' }
    ],
    sources: [
      { label: 'Graphite as a dry lubricant (overview)', url: 'https://en.wikipedia.org/wiki/Graphite#Lubricant' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  },
  {
    id: 'revive-dried-out-markers',
    category: 'Home',
    title: 'Revive Dried-Out Markers',
    emoji: '🖊️',
    summary: 'Don\'t bin a marker that\'s gone faint — a few minutes soaking the tip in rubbing alcohol dissolves the dried ink and brings felt tips back to life.',
    tags: ['markers', 'felt tip', 'pens', 'revive', 'alcohol', 'save money', 'stationery', 'reuse', 'diy', 'craft'],
    difficulty: 'Easy',
    time: '5–10 min',
    updated: '2026-08-07',
    hero: 'assets/hack-markers-hero.png',
    safety: [
      'Rubbing (isopropyl) alcohol is flammable — keep it away from flames and use in a ventilated space.',
      'Avoid skin and eye contact; wash hands afterwards and keep it away from children and pets.',
      'This revives alcohol- and water-based markers whose ink has dried out. It won\'t refill a marker that\'s genuinely run out of pigment.'
    ],
    materials: [
      'The dried-out marker(s)',
      'Rubbing alcohol (isopropyl alcohol) — or for water-based markers, plain warm water works too',
      'A small cup or the marker\'s own cap',
      'A paper towel',
      'Optional: a small dropper or pipette'
    ],
    why: [
      'Most markers don\'t "run out" — the solvent that keeps the ink liquid simply evaporates, leaving dried pigment clogging the felt tip.',
      'Alcohol is the solvent in many markers, so adding a little back re-dissolves that dried ink and lets it flow through the tip again.',
      'Standing the tip in a few drops lets capillary action pull the solvent up into the fibres, softening the clog from the tip inward.',
      'A bottle of rubbing alcohol costs pennies per use and can rescue a whole tin of markers — far cheaper than replacing them.'
    ],
    steps: [
      { title: 'Identify the marker', body: 'Alcohol-based markers (like art markers) and permanent markers respond to rubbing alcohol. For basic water-based/washable markers, use warm water instead.' },
      { title: 'Add a little solvent', body: 'Put just a small amount of rubbing alcohol in a cup or the marker\'s cap — enough to cover the very tip, no more.' },
      { title: 'Stand the tip in it', body: 'Rest the marker tip-down in the alcohol for a few minutes. You\'ll often see ink swirl out as the dried pigment re-dissolves.',
        img: 'assets/hack-markers-hero.png' },
      { title: 'For sealed markers, add from behind', body: 'If the tip won\'t soak easily, pop off the back end and add a few drops of alcohol directly onto the ink reservoir, then re-seal.' },
      { title: 'Cap and rest', body: 'Wipe the tip on paper towel, put the cap on firmly, and leave the marker horizontal for 15–30 minutes so the solvent spreads evenly.' },
      { title: 'Test it', body: 'Scribble on scrap paper — the ink should flow again. Repeat once if it\'s still faint. Storing markers horizontally with caps on tightly helps them last much longer.' }
    ],
    sources: [
      { label: 'Isopropyl alcohol as a solvent (overview)', url: 'https://en.wikipedia.org/wiki/Isopropyl_alcohol' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  },
  {
    id: 'cost-per-use-calculator',
    category: 'Money',
    title: 'The "Cost Per Use" Rule',
    emoji: '🧦',
    summary: 'A simple mindset hack for deciding cheap vs. quality: divide the price by how many times you\'ll really use it, and let the true cost decide.',
    tags: ['money', 'budgeting', 'shopping', 'save money', 'value', 'mindset', 'cost per use', 'buy it for life', 'framework'],
    difficulty: 'Easy',
    time: '1 min',
    updated: '2026-08-07',
    hero: 'assets/hack-costperuse-hero.png',
    why: [
      'The sticker price is misleading. What actually matters is what each use costs you: Cost Per Use = Price ÷ Number of Uses.',
      'A £10 pair of socks that lasts 20 washes costs 50p per wear. A £30 pair that lasts 300 wears costs 10p per wear — five times cheaper in reality, despite the bigger price tag.',
      'This is why "buy cheap, buy twice" is so often true: the cheap option can have a higher cost per use once you count how quickly it wears out or gets replaced.',
      'It also protects you the other way — if you\'ll only use something once or twice, the cheap version genuinely is the smart buy. The rule stops you overspending on quality you won\'t get value from.'
    ],
    steps: [
      { title: 'Estimate the lifetime uses', body: 'Before buying, honestly guess how many times you\'ll use the item. A daily coat over 3 years is ~1,000 wears; a fancy dress for one wedding is 1–2.' },
      { title: 'Do the simple sum', body: 'Divide the price by that number of uses. £120 boots ÷ 600 wears = 20p per wear. £25 boots ÷ 60 wears = 42p per wear.',
        img: 'assets/hack-costperuse-hero.png' },
      { title: 'Factor in repairs & running costs', body: 'Add anything the item will cost you over its life — refills, batteries, energy, repairs — and subtract resale value if you\'ll sell it on. Then re-check the per-use figure.' },
      { title: 'Compare like for like', body: 'Put the cheap and quality options side by side on cost per use, not sticker price. The lower per-use number is usually the smarter buy.' },
      { title: 'Apply the "use it a lot? invest" test', body: 'Rule of thumb: things you use daily (bed, shoes, chair, phone) reward quality; things you rarely use reward buying cheap. Spend where the uses pile up.' }
    ],
    sources: [
      { label: 'Cost per wear / cost per use (consumer value concept)', url: 'https://en.wikipedia.org/wiki/Cost_per_wear' }
    ],
    related: [
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  },
  {
    id: 'test-charger-speed',
    category: 'Tech',
    title: 'Find Your Fastest Charger & Cable',
    emoji: '⚡',
    summary: 'Got a drawer full of USB-C cables and no idea which is fastest? This built-in tool measures how quickly each charger + cable charges your phone and ranks them for you.',
    tags: ['charger', 'cable', 'usb-c', 'charging', 'speed', 'phone', 'battery', 'test', 'tool', 'fast charging'],
    difficulty: 'Easy',
    time: '2–5 min each',
    updated: '2026-08-08',
    hero: 'assets/hack-charge-hero.png',
    safety: [
      'This is a comparison tool, not a lab instrument. The watt/mA figures are battery-side estimates — great for ranking your own cables, not for quoting exact charger specs.',
      'Only ever charge with the charger and cable your phone came with, or reputable branded replacements. Cheap, uncertified USB-C cables can charge slowly or run hot.',
      'If any cable or plug gets hot, frays, or the connector feels loose, stop using it.'
    ],
    materials: [
      'Your phone',
      'The USB-C chargers and cables you want to compare',
      'A couple of minutes per cable'
    ],
    why: [
      'Not all USB-C cables are equal: thin or uncertified cables have more resistance and can\'t carry as much current, so the same charger fills your battery more slowly through a "bad" cable than a good one.',
      'The honest way to compare them from a web page is to measure the thing you actually care about — how fast your battery percentage climbs — and turn that into an estimated mA and watts using your battery\'s capacity.',
      'A web page can\'t read a cable\'s data speed or the exact USB-PD wattage it negotiated (browsers have no access to that hardware detail), so measuring real charge rate is both the fairest and the only reliable method available.',
      'Run the same short test on each cable in the same battery range and you get a clean league table of your fastest to slowest combos.'
    ],
    steps: [
      { title: 'Open the tester', body: 'Tap the "Open the Charge Speed Tester" button below. On Android/Chrome it reads your battery automatically; on iPhone use the built-in Manual stopwatch mode.' },
      { title: 'Plug in a charger + cable', body: 'Connect the first charger and cable and make sure the phone starts charging.' },
      { title: 'Enter your battery capacity', body: 'Pop in your phone\'s battery capacity in mAh (search your model, e.g. "Pixel 8 battery mAh"). This lets the tool estimate watts.' },
      { title: 'Run a 2–5 minute test', body: 'Start the test and leave the phone alone. The tool tracks your % over time and calculates the charge rate, estimated mA and watts.' },
      { title: 'Label & save it', body: 'Give the combo a name like "65W brick + short braided cable" and save it to your comparison table.' },
      { title: 'Repeat & compare', body: 'Test your other cables in the same battery range (e.g. always 30–60%). The tool ranks them 🥇🥈🥉 so you instantly see your fastest setup.' }
    ],
    related: [
      { label: '⚡ Open the Charge Speed Tester', url: 'charge-test.html' },
      { label: '▶ Play AFTERGLOW', url: 'https://dlinacre.github.io/afterglow/' }
    ]
  }
];
