import { createCarImage } from '../utils/svg.js'

export const carBrands = [
  {
    slug: 'audi',
    name: 'Audi',
    description:
      'Audi blends sharp surfacing, digital-first cabins, and quattro heritage into a lineup that feels technical and composed.',
    signature: 'Progressive lighting, precise proportions, and calm high-speed confidence.',
    availableColours: ['Daytona Gray', 'Glacier White', 'Navarra Blue', 'Chronos Gray'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 52%, #cbd5e1 100%)',
    },
    models: [
      {
        slug: 'a5-sportback',
        name: 'A5 Sportback',
        category: 'Sportback',
        shortDescription:
          'A streamlined four-door design with balanced performance and a clean executive cabin.',
        longDescription:
          'The A5 Sportback pairs coupe-like rooflines with everyday practicality, making it a strong entry point into Audi design without losing rear-seat usability.',
        designStory:
          'Audi keeps the shoulder line tight and uninterrupted, while the roof arc and frameless glass deliver the visual drama usually reserved for two-door shapes.',
        overview:
          'This model suits buyers who want understated premium styling, a composed ride, and a body shape that feels noticeably more expressive than a standard sedan.',
        image: createCarImage({
          body: '#dce4ec',
          accent: '#3b82f6',
          glow: '#93c5fd',
        }),
        imageBackground:
          'linear-gradient(135deg, #09111d 0%, #133b7b 48%, #d7e5f6 100%)',
        colours: [
          { name: 'Glacier White', hex: '#f8fafc' },
          { name: 'Daytona Gray', hex: '#64748b' },
          { name: 'Navarra Blue', hex: '#1d4ed8' },
        ],
        specs: {
          power: '261 hp',
          zeroToSixty: '5.4 s',
          topSpeed: '130 mph',
          drivetrain: 'quattro AWD',
          transmission: '7-speed S tronic',
          seats: '5',
          fuelType: 'Petrol',
          bodyStyle: 'Sportback',
        },
      },
      {
        slug: 's5-sportback',
        name: 'S5 Sportback',
        category: 'Sport performance',
        shortDescription:
          'Sharper response, richer sound, and a more aggressive stance built on the A5 silhouette.',
        longDescription:
          'The S5 Sportback elevates the standard A5 formula with stronger acceleration, quad-exit visual cues, and a more assertive body kit that reads instantly as an S car.',
        designStory:
          'The lower ride height and dark trim create a denser, more planted visual mass, while red brake hardware and larger wheel fitment hint at its extra pace.',
        overview:
          'For shoppers moving beyond a style-led daily driver, the S5 adds genuine performance without abandoning practicality or premium cabin comfort.',
        image: createCarImage({
          body: '#cdd5df',
          accent: '#0f172a',
          glow: '#94a3b8',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #334155 45%, #cbd5e1 100%)',
        colours: [
          { name: 'Chronos Gray', hex: '#475569' },
          { name: 'Mythos Black', hex: '#111827' },
          { name: 'Progressive Red', hex: '#b91c1c' },
        ],
        specs: {
          power: '349 hp',
          zeroToSixty: '4.4 s',
          topSpeed: '155 mph',
          drivetrain: 'quattro AWD',
          transmission: '8-speed Tiptronic',
          seats: '5',
          fuelType: 'Petrol',
          bodyStyle: 'Sportback',
        },
      },
      {
        slug: 'rs6-avant',
        name: 'RS 6 Avant',
        category: 'Performance estate',
        shortDescription:
          'A wide-bodied performance wagon with supercar pace and long-distance touring presence.',
        longDescription:
          'The RS 6 Avant combines cargo-friendly wagon architecture with dramatic arches, huge brakes, and a powertrain that turns a practical shape into a halo product.',
        designStory:
          'Audi uses broad shoulders, a stretched wheelbase, and a deeply carved front fascia to make the RS 6 look muscular even at a standstill.',
        overview:
          'This is the emotional choice in the Audi range: visually bold, highly capable, and distinct enough to define an entire enthusiast-oriented showroom page.',
        image: createCarImage({
          body: '#d7dce4',
          accent: '#ef4444',
          glow: '#fca5a5',
        }),
        imageBackground:
          'linear-gradient(135deg, #1f2937 0%, #7f1d1d 42%, #f3d5d5 100%)',
        colours: [
          { name: 'Nardo Gray', hex: '#d1d5db' },
          { name: 'Sebring Black', hex: '#0f172a' },
          { name: 'Ascari Blue', hex: '#1e3a8a' },
        ],
        specs: {
          power: '621 hp',
          zeroToSixty: '3.3 s',
          topSpeed: '155 mph',
          drivetrain: 'quattro AWD',
          transmission: '8-speed Tiptronic',
          seats: '5',
          fuelType: 'Petrol mild hybrid',
          bodyStyle: 'Avant',
        },
      },
    ],
  },
  {
    slug: 'bmw',
    name: 'BMW',
    description:
      'BMW leans into rear-biased dynamics, driver-focused cockpits, and bold surfacing that makes each series immediately recognizable.',
    signature: 'Athletic stance, strong kidney grille graphics, and driver-first performance tuning.',
    availableColours: ['Brooklyn Grey', 'Alpine White', 'Black Sapphire', 'Portimao Blue'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #111827 0%, #2563eb 45%, #e5e7eb 100%)',
    },
    models: [
      {
        slug: '330i',
        name: '330i',
        category: 'Sports sedan',
        shortDescription:
          'A balanced everyday sedan with crisp handling, clean proportions, and an approachable performance ceiling.',
        longDescription:
          'The 330i is often the gateway to BMW ownership because it expresses the core 3 Series formula without the higher operating intensity of the M-badged variants.',
        designStory:
          'Its shape is defined by a long hood, cab-rearward stance, and crisp lower body surfacing that gives the car tension without looking overworked.',
        overview:
          'This model fits users who want a premium sports sedan with restrained styling, a high-quality cabin, and enough power to keep the chassis interesting.',
        image: createCarImage({
          body: '#e2e8f0',
          accent: '#2563eb',
          glow: '#93c5fd',
        }),
        imageBackground:
          'linear-gradient(135deg, #0f172a 0%, #1d4ed8 45%, #dbeafe 100%)',
        colours: [
          { name: 'Alpine White', hex: '#f8fafc' },
          { name: 'Brooklyn Grey', hex: '#9ca3af' },
          { name: 'Portimao Blue', hex: '#2563eb' },
        ],
        specs: {
          power: '255 hp',
          zeroToSixty: '5.6 s',
          topSpeed: '130 mph',
          drivetrain: 'RWD',
          transmission: '8-speed automatic',
          seats: '5',
          fuelType: 'Petrol',
          bodyStyle: 'Sedan',
        },
        ownershipInfo: {
          title: 'Ownership, servicing, recalls, and known issues',
          officialSummary:
            'The G20 330i follows BMW Condition Based Servicing rather than a fixed mileage-only service plan. BMW UK service-plan items include engine oil, microfilter, air filter, spark plugs, brake fluid, and vehicle checks, while owners should stick to BMW-approved oil and coolant specifications.',
          ownershipRiskSummary: {
            rating: 'Moderate',
            summary:
              'A well-kept 330i is usually a lower-risk ownership proposition than the six-cylinder M340i or the full-fat M4, but it is still a modern turbo BMW with direct injection, cooling-system plastics, electronics, and premium-brand maintenance costs. The main risk is buying a neglected example because it looks cheaper to run on paper.',
            watchouts: [
              'Cooling-system warnings or small coolant losses should still be investigated, even on a four-cylinder daily-driver example.',
              'Brake noise, worn rear tyres, and poor alignment can tell you a lot about how the car has been used and maintained.',
              'Cars with patchy history often hide deferred consumables rather than catastrophic faults, but that still matters to total ownership cost.',
            ],
            bestBuyWindow:
              'A tidy 2022-on LCI saloon with full history and evidence of careful consumable maintenance is the safest mainstream 3 Series buy in the current BMW set.',
          },
          bestSpecToBuy: {
            title: 'Best all-round used buy: LCI 330i with strong history and useful daily equipment',
            summary:
              'The strongest 330i examples are usually facelifted cars with a clean maintenance record, good tyres, and sensible comfort or technology options. On this model, condition, maintenance quality, and specification balance matter more than chasing rare cosmetic extras.',
            recommendedFeatures: [
              'LCI car from mid-2022 onward for the updated cabin presentation and fresher used-market feel.',
              'Parking assistance, upgraded lighting, and comfort-focused options if the car is intended as an everyday premium saloon.',
              'Evidence of proper tyre replacement and alignment work, because it points to careful ownership rather than minimum-cost running.',
              'BMW or respected specialist history that shows more than just oil changes, especially brake fluid and spark plug servicing.',
            ],
            avoidIf: [
              'The car has a thin history, mixed tyres, or overdue brake-fluid and consumable work.',
              'The asking price is close to a newer LCI car without offering standout condition or documented preventative maintenance.',
              'It shows rough idle symptoms, repeated warning lights, or signs of ignored coolant-system niggles.',
            ],
          },
          faceliftGuide: [
            {
              area: 'Exterior design',
              preLciYears: 'Early pre-LCI: 2019 to mid-2022',
              preLci:
                'Pre-LCI 330i cars use the original G20 headlight and bumper treatment, which looks clean and restrained.',
              lciYears: 'LCI: mid-2022 onward',
              lci:
                'LCI cars moved to slimmer headlights and a revised front and rear design that makes the standard 3 Series look newer and more technical.',
              buyerImpact:
                'The facelift is the easiest way to visually date the car. LCI examples usually feel fresher and command stronger money, while pre-LCI cars can still be good value if the history is right.',
            },
            {
              area: 'Cabin and infotainment',
              preLciYears: 'Early pre-LCI: 2019 to mid-2022',
              preLci:
                'Earlier cars have the older twin-screen dashboard arrangement and more conventional physical-control layout.',
              lciYears: 'LCI: mid-2022 onward',
              lci:
                'LCI cars gained BMW Curved Display and the newer infotainment-era cabin layout, giving the 330i a much more contemporary interior feel.',
              buyerImpact:
                'Buyers focused on cabin tech will usually prefer the LCI. Pre-LCI cars still appeal if you want a simpler dashboard and lower entry price.',
            },
            {
              area: 'Value and platform maturity',
              preLciYears: 'Early pre-LCI: 2019 to mid-2022',
              preLci:
                'Older cars now vary more in condition and ownership quality because they have had more time to pick up deferred maintenance or cheap consumables.',
              lciYears: 'LCI: mid-2022 onward',
              lci:
                'Later cars benefit from being newer and from BMW having had more time to mature the G20 platform.',
              buyerImpact:
                'The LCI is usually the easier recommendation for mainstream buyers because it combines newer tech with lower age-related risk.',
            },
          ],
          serviceSchedule: [
            {
              item: 'Engine oil service',
              interval: 'Condition Based Servicing; typically no later than 24 months',
              detail:
                "BMW uses the car's CBS system to determine oil-service timing. Many careful owners shorten the interval, but the official system remains car-led rather than fixed solely by mileage.",
            },
            {
              item: 'Brake fluid',
              interval: 'Commonly every 24 months',
              detail:
                'Brake fluid is tracked separately within BMW service status and should be treated as a routine time-based maintenance item.',
            },
            {
              item: 'Spark plugs',
              interval: 'CBS/usage dependent; commonly around 60,000 miles on stock cars',
              detail:
                'Spark plugs are part of BMW service-plan coverage and become more important as mileage rises or if drivability begins to deteriorate.',
            },
            {
              item: 'Microfilter and air filter',
              interval: 'CBS/usage dependent',
              detail:
                'Both are recurring service items under BMW maintenance planning and should not be ignored on cars used heavily in traffic or dusty conditions.',
            },
          ],
          fluidRequirements: [
            {
              item: 'Engine oil',
              spec: 'BMW-approved low-viscosity oil, commonly LL-17 FE+ 0W-20 on G20 B48 applications',
              capacity: 'Approx. 5.25-5.75 litres with filter',
              note:
                'Use a BMW-approved oil specification for the exact VIN and market. The G20 330i is commonly associated with BMW low-viscosity FE oil in modern fitment guides.',
            },
            {
              item: 'Coolant',
              spec: 'BMW-approved coolant/antifreeze only',
              note:
                'Do not mix unknown coolant formulations. BMW-approved coolant and the correct concentration remain the safe route for long-term ownership.',
            },
            {
              item: 'Fuel',
              spec: 'Premium unleaded petrol',
              note:
                'The turbocharged B48 benefits from quality premium fuel, especially if you want consistent performance and smoother knock control.',
            },
          ],
          recalls: [
            {
              title: 'Starter motor connection may be affected by water ingress',
              recallNumber: 'R/2024/308',
              recallDate: '2024-11-07',
              summary:
                'UK recall records for the 3 Series Saloon include a campaign covering possible water ingress at the starter-generator electrical connection, creating an overheating and fire risk on affected vehicles.',
              appliesNote:
                'VIN-specific. Not every G20 330i will be affected, so the exact car should be checked directly with BMW or the UK recall checker.',
              sourceUrl:
                'https://www.check-vehicle-recalls.service.gov.uk/recall-type/vehicle/make/BMW/model/3%20SERIES%20SALOON/year/2019/recalls',
            },
            {
              title: 'Tie rod may not have been produced to specification',
              recallNumber: 'R/2020/127',
              recallDate: '2020-06-05',
              summary:
                'A UK 3 Series recall record notes that a steering tie rod could break if manufactured out of specification, affecting vehicle control.',
              appliesNote:
                'This is platform- and VIN-specific rather than guaranteed on every 330i, so individual verification matters.',
              sourceUrl:
                'https://www.check-vehicle-recalls.service.gov.uk/recall-type/vehicle/make/BMW/model/3%20SERIES/year/2019/recalls',
            },
          ],
          ownerReportedIssues: [
            'Brake squeal and low-speed brake noise are common owner complaints on G20 3 Series cars, even when nothing is fundamentally wrong.',
            'Owners report intermittent coolant-level messages and minor coolant seepage from hoses or ancillary components rather than dramatic engine failures.',
            'Minor software, sensor, or infotainment niggles show up more often than serious mechanical defects on well-maintained stock cars.',
          ],
          engineFaults: [
            'The B48 is generally viewed as a solid modern BMW four-cylinder, but cooling-system seepage, plastic ancillary leaks, and ignition-related drivability issues can still appear as mileage builds.',
            'Rough running under load or at idle should prompt checks of coils, plugs, and intake-related leaks before assuming a larger engine problem.',
            'Deferred maintenance can make a fundamentally good engine feel worse than it is, so condition and service evidence matter heavily on used examples.',
          ],
          sourceLinks: [
            {
              label: 'BMW UK 3 Series Saloon model page',
              url: 'https://www.bmw.co.uk/en/all-models/3-series/sedan/bmw-3-series-sedan-m-automobiles.html',
            },
            {
              label: 'BMW UK Service Inclusive',
              url: 'https://www.bmw.co.uk/en/topics/owners/service-workshop/servicing/service-inclusive.html',
            },
            {
              label: 'UK Government vehicle recalls checker',
              url: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
            {
              label: 'G20 Bimmerpost owner discussions',
              url: 'https://g20.bimmerpost.com/forums/',
            },
          ],
          disclaimer:
            'Recalls are VIN-specific and should always be verified against the exact registration or VIN before purchase. Owner-reported issues are included as curated enthusiast context, not as official BMW fault bulletins.',
        },
      },
      {
        slug: 'm340i',
        name: 'M340i xDrive Saloon',
        category: 'Performance sedan',
        shortDescription:
          'The UK-market G20 six-cylinder 3 Series halo with B58 power, xDrive traction, and understated supersaloon pace.',
        longDescription:
          'The G20 M340i xDrive Saloon sits at the top of the regular UK 3 Series range below the full M3. It combines BMW’s B58 straight-six with xDrive, the ZF 8-speed automatic, and a subtle exterior package that makes it one of the strongest all-round performance saloons in the segment.',
        designStory:
          'BMW keeps the G20 M340i visually restrained, using darker trim, M aerodynamic detailing, and wider wheel fitment rather than exaggerated bodywork. The result is a car that signals performance without looking as overt as a full M car.',
        overview:
          'If the brief is one car that can commute, cover motorway miles, handle poor weather, and still feel genuinely quick, the UK G20 M340i xDrive Saloon is one of the strongest answers in the current dataset.',
        image: createCarImage({
          body: '#dce1e7',
          accent: '#0f172a',
          glow: '#94a3b8',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #334155 42%, #dce3ea 100%)',
        colours: [
          { name: 'Black Sapphire', hex: '#111827' },
          { name: 'Brooklyn Grey', hex: '#9ca3af' },
          { name: 'Tanzanite Blue', hex: '#172554' },
        ],
        specs: {
          power: '374 hp',
          zeroToSixty: '4.3 s',
          topSpeed: '155 mph',
          drivetrain: 'xDrive AWD',
          transmission: '8-speed Steptronic Sport',
          seats: '5',
          fuelType: 'Petrol mild hybrid',
          bodyStyle: 'Sedan',
        },
        ownershipInfo: {
          title: 'Ownership, servicing, recalls, and known issues',
          officialSummary:
            'BMW services the G20 M340i using Condition Based Servicing rather than one fixed mileage-only schedule. Official UK service plans cover engine oil, microfilter, air filter, spark plugs, brake fluid, and vehicle checks, while the car itself specifies BMW-approved low-viscosity oil and BMW-approved coolant.',
          ownershipRiskSummary: {
            rating: 'Moderate',
            summary:
              "The G20 M340i is a relatively strong modern BMW performance car if it has been maintained properly, but it is still a complex six-cylinder turbo saloon with xDrive, expensive tyres, and fast-road consumable costs. The biggest risks come from poor maintenance discipline, cheap tyres, and heavily modified cars rather than from one universal engine defect.",
            watchouts: [
              'Insist on four matching premium tyres with healthy tread. Mixed tyres on an xDrive car are both a warning sign and a potential driveline risk.',
              'Treat repeated coolant top-ups, low-coolant messages, or staining under the front of the car as inspection points before purchase.',
              'Be more cautious with tuned cars unless the owner can evidence shorter oil-service intervals, quality hardware, and a reputable calibration.',
            ],
            bestBuyWindow:
              'A 2022-on LCI car with full BMW or BMW-specialist history, correct tyres, and clear consumable records is the safest all-round buy.',
          },
          bestSpecToBuy: {
            title: 'Best all-round UK used buy: facelifted LCI car with sensible daily-use options',
            summary:
              'For most buyers the sweet spot is a later LCI saloon rather than the earliest pre-LCI example. It gives you the newer cabin, the sharper facelift styling, and a generally fresher used-car pool. The best cars are not the most heavily modified ones; they are the well-kept, correctly tyred examples with strong maintenance history and useful driver-assistance or lighting options.',
            recommendedFeatures: [
              'LCI model year for the updated exterior, curved display interior, and newer infotainment environment.',
              'Strong history over headline options. A well-maintained car with evidence of brake fluid, plugs, tyres, and recall work beats a flashier but neglected example.',
              'Useful daily options such as upgraded lighting, parking assistance, and comfort-oriented equipment if the car will be used as a year-round road car.',
              'Factory-style condition with quality tyres and clean alignment behaviour. That matters more on this platform than chasing every cosmetic extra.',
            ],
            avoidIf: [
              'The car is priced like a premium example but has mixed tyre brands, overdue maintenance, or unclear recall history.',
              'It has aggressive tuning with no paperwork showing supporting maintenance or parts quality.',
              'An early pre-LCI car is asking near-LCI money without a clear condition or history advantage.',
            ],
          },
          faceliftGuide: [
            {
              area: 'Exterior design',
              preLciYears: 'Early pre-LCI: 2019 to mid-2022',
              preLci:
                'Pre-LCI cars keep the original G20 front-end graphics and earlier bumper treatment, giving them a slightly more understated look.',
              lciYears: 'LCI: mid-2022 onward',
              lci:
                'The 2022 LCI introduced slimmer headlights, revised grille treatment, and a cleaner rear bumper design with a more up-to-date surface treatment.',
              buyerImpact:
                'LCI cars look newer immediately and usually present better in the used market. Pre-LCI cars still suit buyers who prefer the earlier, slightly cleaner visual identity.',
            },
            {
              area: 'Cabin and infotainment',
              preLciYears: 'Early pre-LCI: 2019 to mid-2022',
              preLci:
                'Earlier cars use the older dashboard layout with separate instrument and central screens plus more conventional physical controls.',
              lciYears: 'LCI: mid-2022 onward',
              lci:
                'LCI cars gained BMW Curved Display and the newer infotainment-era dashboard layout, making the cabin feel visibly more modern.',
              buyerImpact:
                'If cabin tech matters, the LCI is the easy winner. If you prefer a more traditional button-heavy BMW interior, the pre-LCI still has appeal.',
            },
            {
              area: 'Specification feel',
              preLciYears: 'Early pre-LCI: 2019 to mid-2022',
              preLci:
                'Pre-LCI examples vary more from car to car and can feel more dependent on optional packs to feel complete.',
              lciYears: 'LCI: mid-2022 onward',
              lci:
                'Facelifted cars generally feel newer and more cohesive in equipment presentation, especially in the cabin and assistance interface.',
              buyerImpact:
                'A good pre-LCI can still be strong value, but the average LCI tends to need fewer compromises when you compare tech and showroom freshness.',
            },
            {
              area: 'Issues and platform maturity',
              preLciYears: 'Early pre-LCI: 2019 to mid-2022',
              preLci:
                'Earlier cars are more likely to be older, more worn, and to have passed through multiple owners or tyre sets by now.',
              lciYears: 'LCI: mid-2022 onward',
              lci:
                'The facelift itself should not be treated as a guaranteed fault fix, but later cars benefit from being newer and from BMW having had more time to mature the platform.',
              buyerImpact:
                'The practical advantage of the LCI is lower age-related risk and a newer user experience, not a formal BMW statement that the facelift cured every known issue.',
            },
          ],
          serviceSchedule: [
            {
              item: 'Engine oil service',
              interval: 'Condition Based Servicing; typically no later than 24 months',
              detail:
                'BMW UK uses the car’s service indicator to call the oil service. Enthusiast owners often shorten this significantly, but the official car-led interval is CBS-based rather than a simple fixed mileage schedule.',
            },
            {
              item: 'Brake fluid',
              interval: 'Commonly every 24 months',
              detail:
                'Brake fluid is a separate BMW service item and appears individually in UK service plans. Exact due date is shown in the service status menu.',
            },
            {
              item: 'Spark plugs',
              interval: 'CBS/usage dependent; commonly around 60,000 miles on stock cars',
              detail:
                'BMW includes spark plugs as a defined service-plan item, but timing still depends on the vehicle’s maintenance logic and usage.',
            },
            {
              item: 'Microfilter and air filter',
              interval: 'CBS/usage dependent',
              detail:
                'Both are part of BMW’s official service coverage and should be treated as standard recurring maintenance items rather than one-off jobs.',
            },
          ],
          fluidRequirements: [
            {
              item: 'Engine oil',
              spec: 'BMW Longlife-17 FE+ 0W-20',
              capacity: 'Approx. 6.5-7.0 litres with filter',
              note:
                'Use BMW-approved oil only. This B58TU application is commonly specified with LL-17 FE+ 0W-20 in UK and EU fitment guides.',
            },
            {
              item: 'Coolant',
              spec: 'BMW-approved coolant/antifreeze only',
              note:
                'Do not mix unknown aftermarket coolant types. BMW guidance is to use approved coolant only and maintain the correct concentration.',
            },
            {
              item: 'Fuel',
              spec: 'Premium unleaded petrol',
              note:
                'Higher-octane premium fuel is the normal expectation for the M340i’s B58 engine, especially if you want it to perform consistently and avoid knock-related pullback.',
            },
          ],
          recalls: [
            {
              title: 'Starter motor connection may be affected by water ingress',
              recallNumber: 'R/2024/308',
              recallDate: '2024-11-07',
              summary:
                'UK recall records for the 3 Series Saloon show a campaign for possible water ingress at the starter-generator electrical connection, creating an overheating and fire risk.',
              appliesNote:
                'VIN-specific. Not every G20 M340i is affected, so the exact car should be checked directly with BMW or the UK recall checker.',
              sourceUrl:
                'https://www.check-vehicle-recalls.service.gov.uk/recall-type/vehicle/make/BMW/model/3%20SERIES%20SALOON/year/2019/recalls',
            },
            {
              title: 'Tie rod may not have been produced to specification',
              recallNumber: 'R/2020/127',
              recallDate: '2020-06-05',
              summary:
                'A UK BMW 3 Series recall record notes that a steering tie rod could break if manufactured out of specification, affecting vehicle control.',
              appliesNote:
                'This is platform-year dependent rather than guaranteed on every M340i. VIN confirmation is essential.',
              sourceUrl:
                'https://www.check-vehicle-recalls.service.gov.uk/recall-type/vehicle/make/BMW/model/3%20SERIES/year/2019/recalls',
            },
            {
              title: 'Rear head restraint locking/interlock weld issue',
              recallNumber: 'R/2020/156',
              recallDate: '2020-07-02',
              summary:
                'UK recall records for the 3 Series indicate that the foldable rear centre head restraint mechanism may not have been welded correctly.',
              appliesNote:
                'Again, this is VIN-specific and should be verified against the individual car before purchase.',
              sourceUrl:
                'https://www.check-vehicle-recalls.service.gov.uk/recall-type/vehicle/make/BMW/model/3%20SERIES/year/2019/recalls',
            },
          ],
          ownerReportedIssues: [
            'Low-speed brake squeal and pad noise are widely reported by G20 M340i owners, especially on cars used lightly or driven mostly in town.',
            'Intermittent low-coolant warnings and minor coolant loss complaints show up in owner forums, often linked to hoses, caps, or cooling-system ancillaries rather than catastrophic engine failure.',
            'Tyre sensitivity is a recurring theme on xDrive cars; mismatched tyres or worn mixed-brand sets can noticeably affect ride quality and drivetrain feel.',
          ],
          engineFaults: [
            'The B58 is generally regarded as one of BMW’s stronger modern engines, but owners still report occasional PCV/valve-cover related issues, coolant system seepage, and leaks around ancillary plastic components as mileage rises.',
            'Modified cars can introduce their own reliability problems through aggressive tuning, heat load, and neglected fluid-change discipline. The engine itself is strong, but the quality of modifications matters heavily.',
            'As with other modern direct-injection turbo engines, ignition coils, plugs, and carbon-related drivability deterioration are still worth monitoring over time.',
          ],
          sourceLinks: [
            {
              label: 'BMW UK M340i xDrive Saloon model page',
              url: 'https://www.bmw.co.uk/en/all-models/3-series/sedan/bmw-3-series-sedan-m-automobiles.html',
            },
            {
              label: 'BMW UK Service Inclusive',
              url: 'https://www.bmw.co.uk/en/topics/owners/service-workshop/servicing/service-inclusive.html',
            },
            {
              label: 'UK Government vehicle recalls checker',
              url: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
            {
              label: 'G20 Bimmerpost owner discussions',
              url: 'https://g20.bimmerpost.com/forums/',
            },
            {
              label: 'BMW-approved oil fitment reference',
              url: 'https://www.rmeuropean.com/Products/Engine-Oil-01468?fitment=1',
            },
          ],
          disclaimer:
            'Recalls are VIN-specific and should always be verified against the exact registration or VIN before purchase. Owner-reported issues are included as curated enthusiast context, not as official BMW fault bulletins.',
        },
        officialResources: {
          title: 'Official BMW resources',
          summary:
            'These links point users back to BMW or UK government sources rather than hosting copied imagery or brochures directly inside Drive Atlas.',
          links: [
            {
              label: 'BMW UK M340i xDrive Saloon model page',
              url: 'https://www.bmw.co.uk/en/all-models/3-series/sedan/bmw-3-series-sedan-m-automobiles.html',
              type: 'official-model-page',
            },
            {
              label: 'BMW UK brochure hub',
              url: 'https://www.bmw.co.uk/en/topics/owners/brochures.html',
              type: 'brochure',
            },
            {
              label: 'BMW UK configurator / build pages',
              url: 'https://www.bmw.co.uk/en/all-models/3-series/sedan/bmw-3-series-sedan-m-automobiles.html',
              type: 'configurator',
            },
            {
              label: 'UK vehicle recall checker',
              url: 'https://www.check-vehicle-recalls.service.gov.uk/',
              type: 'recall-checker',
            },
          ],
        },
      },
        {
          slug: 'm4-competition',
          name: 'M4 Competition Coupé with M xDrive',
          category: 'High-performance coupe',
          shortDescription:
            'BMW’s current UK midsize M-coupe flagship, pairing the S58 straight-six with M xDrive and everyday-supercar pace.',
          longDescription:
            'The G82 M4 Competition Coupé with M xDrive is the most extreme car in the current BMW lineup inside this project. It combines the S58 twin-turbo straight-six, M xDrive, and a highly focused chassis with enough everyday usability to work beyond track-day duty.',
          designStory:
            'Its proportions are low, wide, and visibly tense, with expanded arches, deep aero detailing, and aggressive cooling surfaces that make it read as a genuine M car rather than just a faster 4 Series.',
          overview:
            'This is the BMW page for users who want the dramatic end of the spectrum: huge pace, real track intent, and much higher ownership stakes than the regular 3 Series-based cars.',
        image: createCarImage({
          body: '#e5e7eb',
          accent: '#f59e0b',
          glow: '#fcd34d',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #92400e 42%, #fef3c7 100%)',
        colours: [
          { name: 'Sao Paulo Yellow', hex: '#ca8a04' },
          { name: 'Frozen Black', hex: '#0f172a' },
          { name: 'Alpine White', hex: '#f8fafc' },
        ],
          specs: {
            power: '530 hp',
            zeroToSixty: '3.5 s',
            topSpeed: '155 mph',
            drivetrain: 'M xDrive AWD',
            transmission: '8-speed M Steptronic',
            seats: '4',
            fuelType: 'Petrol',
            bodyStyle: 'Coupe',
          },
          ownershipInfo: {
            title: 'Ownership, servicing, recalls, and known issues',
            officialSummary:
              'The G82 M4 Competition Coupé with M xDrive uses BMW Condition Based Servicing together with M-car-specific maintenance expectations. UK service planning still revolves around oil, brake fluid, plugs, filters, and vehicle checks, but owners should also pay attention to M-car running-in requirements, brake wear, tyres, and correct BMW-approved fluids.',
            ownershipRiskSummary: {
              rating: 'Moderate to high',
              summary:
                'The M4 Competition is not widely regarded as a fragile engine car, but it is unquestionably a high-cost ownership proposition. The risks sit less in one notorious catastrophic flaw and more in the cost of tyres, brakes, alignment, front-end cooling vulnerability, and buying a track-used or poorly modified example.',
              watchouts: [
                'Look closely for track use, repeated heavy brake wear, stone damage to the front cooling pack, and heat-cycled tyres.',
                'Poor tyre matching, skipped running-in service evidence, or weak warm-up discipline matter more here than on the regular 3 Series cars.',
                'Cheap modifications or hard-used tuned cars can turn a fundamentally strong S58 package into an expensive gamble.',
              ],
              bestBuyWindow:
                'For most buyers, a 2024-on LCI-style M4 Competition with M xDrive, strong service history, and evidence of careful consumable spending is the safest premium buy.',
            },
            bestSpecToBuy: {
              title: 'Best all-round used buy: steel-brake xDrive car with strong history and sensible road spec',
              summary:
                'For road-biased buyers, the sweet spot is usually an M4 Competition with M xDrive that has been well maintained, correctly run in, and not obviously over-focused on track aesthetics. A clean history, premium tyres, front-end protection, and usable comfort options are usually worth more than chasing the most aggressive-looking build.',
              recommendedFeatures: [
                'Later 2024-on update if budget allows, because it adds newer lighting signatures, refreshed interior details, and the latest infotainment environment.',
                'Evidence of the running-in service and careful servicing thereafter. On an M car this matters more than almost any option list.',
                'A road-friendly specification with quality tyres, clean brake history, and no signs of repeated hard track abuse.',
                'Visibility, camera, and daily-comfort features if the car is intended for mixed use rather than being a dedicated weekend machine.',
              ],
              avoidIf: [
                'The car has cheap tyres, heavy front-end stone damage, repeated track preparation clues, or unclear running-in history.',
                'It is tuned or modified without strong supporting paperwork, alignment records, and consumable evidence.',
                'You are paying a premium for cosmetic extras while the maintenance story is only average.',
              ],
            },
            faceliftGuide: [
              {
                area: 'Exterior design',
                preLciYears: 'Early pre-LCI: 2021 to early 2024',
                preLci:
                  'Early G82 cars carry the original M4 headlight and exterior detailing package introduced at launch.',
                lciYears: 'LCI-style update: 2024 onward',
                lci:
                  'The 2024 update added new headlights, available laser taillights, and detail changes including new wheel designs.',
                buyerImpact:
                  'Later cars look sharper and more current immediately. Pre-update cars can still be excellent buys if the condition and history are stronger.',
              },
              {
                area: 'Cabin and infotainment',
                preLciYears: 'Early pre-LCI: 2021 to early 2024',
                preLci:
                  'Earlier cars already feel special, but they predate the latest 2024 refresh touches and software environment.',
                lciYears: 'LCI-style update: 2024 onward',
                lci:
                  'BMW’s 2024 revision brought new steering-wheel and trim details plus Operating System 8.5 for the digital environment.',
                buyerImpact:
                  'The later car feels more current and more polished inside, though some buyers will still care more about history and condition than the software generation.',
              },
              {
                area: 'Powertrain and maturity',
                preLciYears: 'Early pre-LCI: 2021 to early 2024',
                preLci:
                  'Launch cars already offered very high performance, but they sit earlier in the life cycle and now cover the widest spread of use cases and owner types.',
                lciYears: 'LCI-style update: 2024 onward',
                lci:
                  'The 2024 update increased Competition xDrive output to 530 hp and benefits from later lifecycle maturity.',
                buyerImpact:
                  'Later cars combine more power with newer age profile. Earlier cars can still make sense if the discount is meaningful and the maintenance story is stronger.',
              },
            ],
            serviceSchedule: [
              {
                item: 'Running-in service',
                interval: 'Critical early service, typically around 1,200 miles',
                detail:
                  'BMW M cars require an early running-in service. Evidence that it was completed on time is an important buying check on any used M4 Competition.',
              },
              {
                item: 'Engine oil service',
                interval: 'Condition Based Servicing; typically no later than 24 months',
                detail:
                  "BMW still uses CBS logic, but on an S58 car many careful owners shorten oil intervals substantially, especially if the car sees hard road or track use.",
              },
              {
                item: 'Brake fluid',
                interval: 'Commonly every 24 months; sooner for hard use',
                detail:
                  'Brake fluid is a separate service item and becomes even more important if the car has seen repeated high-temperature driving.',
              },
              {
                item: 'Spark plugs and filters',
                interval: 'CBS/usage dependent',
                detail:
                  'Spark plugs, intake filtration, and general inspection work matter heavily on a turbo M car where heat and load are much higher than on a standard BMW coupé.',
              },
            ],
            fluidRequirements: [
              {
                item: 'Engine oil',
                spec: 'BMW 0W-30 performance oil, commonly associated with LL-01 FE on S58 applications',
                capacity: 'Approx. 7.0 litres with filter',
                note:
                  'Use the exact BMW-approved oil specification for the VIN and market. Public BMW specialist fitment references commonly associate the S58 with BMW 0W-30.',
              },
              {
                item: 'Coolant',
                spec: 'BMW-approved coolant/antifreeze only',
                note:
                  'Cooling-system integrity matters heavily on track-capable turbo M cars, so sticking to BMW-approved coolant and correct mixture is important.',
              },
              {
                item: 'Fuel',
                spec: 'Premium unleaded petrol only',
                note:
                  'The S58 is designed around premium fuel. Low-quality fuel is the wrong place to save money on an M4 Competition.',
              },
            ],
            recalls: [
              {
                title: 'VIN-specific recall verification required',
                recallNumber: 'Check exact VIN',
                recallDate: 'Before purchase',
                summary:
                  'A clear G82 M4 Competition-specific UK public recall campaign was not confirmed in this research pass, but that should not be treated as proof that an individual vehicle has no open recall history.',
                appliesNote:
                  'Always check the exact VIN or registration with BMW and the UK government recall checker before buying.',
                sourceUrl:
                  'https://www.check-vehicle-recalls.service.gov.uk/',
              },
            ],
            ownerReportedIssues: [
              'Owners frequently mention high tyre and brake spend rather than a long list of mechanical failures.',
              'Brake squeal, stone damage to exposed front cooling hardware, and general fear of kerbed forged wheels are recurring real-world themes.',
              'As with other high-output BMWs, software warnings or minor sensor oddities can appear even on otherwise healthy cars.',
            ],
            engineFaults: [
              'The S58 has a strong reputation so far, but heat, modification quality, and maintenance discipline matter much more here than on lower-output BMWs.',
              'Cooling-system vulnerability and front-end heat-management exposure deserve attention because the car is often driven hard and the cooling pack sits in the firing line for road debris.',
              'A hard-used car can consume tyres, brakes, and alignment settings rapidly even if the core engine remains healthy.',
            ],
            sourceLinks: [
              {
                label: 'BMW UK M4 Competition Coupé overview',
                url: 'https://www.bmw.co.uk/en/all-models/m-models/bmw-4-series-m-models/bmw-m4-coupe.html',
              },
              {
                label: 'BMW UK M4 technical data',
                url: 'https://www.bmw.co.uk/en/all-models/m-series/m4-series/bmw-m4-coupe-technical-data.html',
              },
              {
                label: 'BMW UK Service Inclusive',
                url: 'https://www.bmw.co.uk/en/topics/owners/service-workshop/servicing/service-inclusive.html',
              },
              {
                label: 'BMW UK 2024 M4 update press release',
                url: 'https://www.press.bmwgroup.com/united-kingdom/article/detail/T0439398EN_GB/the-new-bmw-m4-competition-coup%C3%A9-with-m-xdrive-and-the-new-bmw-m4-competition-convertible-with-m-xdrive',
              },
              {
                label: 'G8X owner discussions',
                url: 'https://g80.bimmerpost.com/forums/',
              },
            ],
            disclaimer:
              'Recall status should always be checked against the exact VIN before purchase. Owner-reported issues are curated enthusiast context, not official BMW technical bulletins.',
          },
        },
    ],
  },
  {
    slug: 'mercedes-benz',
    name: 'Mercedes-Benz',
    description:
      'Mercedes-Benz leans into polished cabins, strong motorway refinement, and layered technology that appeals to buyers who want luxury first and pace second.',
    signature: 'Digital-heavy interiors, polished comfort, and understated high-speed confidence.',
    availableColours: ['Obsidian Black', 'High-tech Silver', 'Spectral Blue', 'MANUFAKTUR Opalite White'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #0f172a 0%, #334155 46%, #d5dde7 100%)',
    },
    models: [
      {
        slug: 'c43-amg',
        name: 'Mercedes-AMG C 43 4MATIC Saloon',
        category: 'Performance saloon',
        shortDescription:
          'A compact AMG saloon that prioritises fast-road pace, digital theatre, and all-weather traction.',
        longDescription:
          'The current UK Mercedes-AMG C 43 4MATIC Saloon combines AMG-tuned chassis work, a highly digitised W206 cabin, and a four-cylinder turbo-hybrid performance package aimed at buyers who want a sharper C-Class without stepping into full C 63 ownership.',
        designStory:
          'Mercedes keeps the C 43 visually crisp rather than overblown, using AMG bumpers, wheel fitment, and trim detailing to signal performance within the normal C-Class silhouette.',
        overview:
          'This is a strong choice for buyers who want something more luxurious than an M340i but still quick enough to feel meaningfully special on UK roads.',
        image: createCarImage({
          body: '#dde3ea',
          accent: '#64748b',
          glow: '#cbd5e1',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #475569 42%, #e2e8f0 100%)',
        colours: [
          { name: 'Obsidian Black', hex: '#0f172a' },
          { name: 'High-tech Silver', hex: '#94a3b8' },
          { name: 'Spectral Blue', hex: '#1e3a8a' },
        ],
        specs: {
          power: '408 hp',
          zeroToSixty: '4.6 s',
          topSpeed: '155 mph',
          drivetrain: '4MATIC AWD',
          transmission: '9-speed AMG SPEEDSHIFT MCT',
          seats: '5',
          fuelType: 'Petrol mild hybrid',
          bodyStyle: 'Saloon',
        },
        ownershipInfo: {
          title: 'Ownership, servicing, recalls, and known issues',
          officialSummary:
            'The UK C 43 uses Mercedes-Benz digital service scheduling rather than one simple fixed-interval ownership pattern. Regular servicing, correct Mercedes-approved fluids, and careful attention to tyres and brakes matter heavily on a car that blends luxury usage with AMG performance.',
          ownershipRiskSummary: {
            rating: 'Moderate to high',
            summary:
              'The current C 43 is a technically dense performance saloon with AMG-specific hardware, hybrid assistance, and a heavily digital cabin. The biggest ownership risks are complexity, consumable cost, and buying a car that looks premium but has been maintained to the minimum standard.',
            watchouts: [
              'Be cautious of cars with thin servicing evidence, especially where brake, tyre, and fluid history looks incomplete.',
              'Interior electronics and software comfort issues are more likely to irritate owners than a single famous powertrain flaw.',
              'Tyre quality and alignment matter on a fast AWD saloon that will often be run as a daily driver in poor weather.',
            ],
            bestBuyWindow:
              'A later, well-documented UK car with full Mercedes or strong specialist history and premium tyres is the safest route in.',
          },
          bestSpecToBuy: {
            title: 'Best all-round used buy: well-kept standard-shape car with comfort and camera options',
            summary:
              'The strongest C 43 examples are the ones bought for fast-road daily use rather than for showing off on a spec sheet. Good history, clean tyres, and practical tech options matter more than chasing every cosmetic extra.',
            recommendedFeatures: [
              'Parking camera and driver-assistance equipment to make the car easier to live with in daily UK use.',
              'Strong service evidence covering more than routine oil changes, especially tyres, brake fluid, and brake wear.',
              'A clean interior electronics history with no recurring infotainment or driver-display complaints.',
              'Premium tyres on all four corners and no sign of cut-price consumable management.',
            ],
            avoidIf: [
              'The car has patchy digital history or recurring warning-light stories.',
              'It wears mixed tyres or cheap replacements on a performance AWD setup.',
              'You are paying a premium for looks while the service story is average.',
            ],
          },
          faceliftGuide: [
            {
              area: 'Lifecycle position',
              preLciYears: 'Current UK W206 AMG C 43: 2023 onward',
              preLci:
                'The current UK C 43 sits in the present W206 generation and has not yet established a meaningful full UK facelift split in the way older BMW examples have.',
              lciYears: 'Full UK LCI split not yet established',
              lci:
                'No mature UK facelift divide is available yet, so buyers should compare by model year, equipment, and maintenance quality rather than chasing an LCI badge.',
              buyerImpact:
                'On this model the smarter filter is ownership quality, software maturity, and spec, not facelift terminology.',
            },
          ],
          serviceSchedule: [
            {
              item: 'Engine oil service',
              interval: 'Digital service monitoring; commonly annual or mileage-triggered',
              detail:
                'Follow the Mercedes digital service schedule and treat oil quality seriously on a hard-working AMG four-cylinder.',
            },
            {
              item: 'Brake fluid',
              interval: 'Time-based maintenance item',
              detail:
                'Brake fluid should be kept on schedule because the C 43 will often be driven harder than a standard C-Class.',
            },
            {
              item: 'Filters and inspection work',
              interval: 'Service-plan dependent',
              detail:
                'Cabin filters, air filtration, and routine inspections matter for both comfort and long-term mechanical confidence.',
            },
          ],
          fluidRequirements: [
            {
              item: 'Engine oil',
              spec: 'Mercedes-approved performance oil only',
              note:
                'Use the exact Mercedes approval required for the VIN and engine application rather than treating it like a generic turbo-four service.',
            },
            {
              item: 'Coolant',
              spec: 'Mercedes-approved coolant only',
              note:
                'Cooling-system correctness matters on a high-output hybrid-assisted AMG application.',
            },
            {
              item: 'Fuel',
              spec: 'Premium unleaded petrol',
              note:
                'Premium fuel is the right baseline for consistent performance and calibration stability.',
            },
          ],
          recalls: [
            {
              title: 'VIN-specific recall verification required',
              recallNumber: 'Check exact VIN',
              recallDate: 'Before purchase',
              summary:
                'A conservative VIN-check reminder is the right approach here. Buyers should verify open Mercedes and DVSA recall campaigns against the exact vehicle.',
              appliesNote:
                'Always check the exact VIN or registration before purchase rather than assuming model-wide recall status.',
              sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          ownerReportedIssues: [
            'Owners tend to talk more about software behaviour, cabin complexity, and value-for-money than about one defining mechanical weakness.',
            'Tyre, brake, and suspension consumable spend can feel heavier than first expected for buyers stepping up from mainstream saloons.',
            'The current four-cylinder AMG character divides opinion more than the old six-cylinder cars.',
          ],
          engineFaults: [
            'The risk profile here is more about complexity and running cost than about a widely accepted single fatal engine fault.',
            'As with other modern turbo-hybrid performance cars, cooling-system integrity, electrical stability, and service quality all matter disproportionately.',
            'Poor maintenance can make a technically strong car feel troublesome very quickly because so much of the ownership experience is mediated through electronics.',
          ],
          sourceLinks: [
            {
              label: 'Mercedes-Benz UK C-Class Saloon',
              url: 'https://www.mercedes-benz.co.uk/passengercars/models/saloon/c-class/overview.html',
            },
            {
              label: 'Mercedes-AMG UK C-Class overview',
              url: 'https://www.mercedes-benz.co.uk/passengercars/models/saloon/c-class-amg/overview.html',
            },
            {
              label: 'UK Government vehicle recalls checker',
              url: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          disclaimer:
            'Recall status should always be checked against the exact VIN before purchase. Owner-reported issues are curated market context, not official Mercedes technical bulletins.',
        },
      },
    ],
  },
  {
    slug: 'toyota',
    name: 'Toyota',
    description:
      'Toyota remains one of the strongest UK brands for long-term dependability, hybrid efficiency, and low-drama ownership.',
    signature: 'Reliability-led engineering, strong resale, and sensible everyday performance.',
    availableColours: ['Pure White', 'Scarlet Flare', 'Decuma Grey', 'Precious Black'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #111827 0%, #991b1b 45%, #f3d5d5 100%)',
    },
    models: [
      {
        slug: 'gr-yaris',
        name: 'GR Yaris',
        category: 'Performance hatchback',
        shortDescription:
          'A homologation-style hot hatch with real mechanical attitude and a reputation that reaches beyond its size.',
        longDescription:
          'The UK GR Yaris stands apart from mainstream hot hatches by using a purpose-built performance platform, GR-Four all-wheel drive, and a turbocharged three-cylinder engine that feels much more serious than the badge size suggests.',
        designStory:
          'Toyota’s GR team gave the car squat proportions, pumped arches, and a short-wheelbase stance that immediately separates it from normal supermini design language.',
        overview:
          'For drivers who want compact size, huge character, and real tuning or B-road appeal, the GR Yaris is one of the most distinctive modern Japanese performance cars in the UK market.',
        image: createCarImage({
          body: '#f3f4f6',
          accent: '#dc2626',
          glow: '#fca5a5',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #991b1b 42%, #fee2e2 100%)',
        colours: [
          { name: 'Pure White', hex: '#f8fafc' },
          { name: 'Precious Black', hex: '#111827' },
          { name: 'Scarlet Flare', hex: '#b91c1c' },
        ],
        specs: {
          power: '280 hp',
          zeroToSixty: '5.2 s',
          topSpeed: '143 mph',
          drivetrain: 'GR-Four AWD',
          transmission: 'Manual',
          seats: '4',
          fuelType: 'Petrol',
          bodyStyle: '3-door hatchback',
        },
        ownershipInfo: {
          title: 'Ownership, servicing, recalls, and known issues',
          officialSummary:
            'The GR Yaris blends Toyota service discipline with genuine performance-car ownership needs. Routine oil quality, brake condition, and careful monitoring of modified examples matter far more than on a normal Yaris.',
          ownershipRiskSummary: {
            rating: 'Moderate',
            summary:
              'A standard GR Yaris is generally well regarded, but the car attracts hard use, modifications, and enthusiastic owners. The main risk is buying a car that has lived a much harder life than its paperwork suggests.',
            watchouts: [
              'Modified cars need much closer scrutiny than stock ones, especially around tuning, clutch wear, and heat management.',
              'Front-end damage, wheel damage, and signs of repeated track use tell you a lot on this platform.',
              'Tyres and alignment matter because the chassis is so sensitive to how the car has been driven.',
            ],
            bestBuyWindow:
              'A stock or lightly modified car with full Toyota history and careful warm-up ownership habits is the safest enthusiast buy.',
          },
          bestSpecToBuy: {
            title: 'Best used buy: standard-shape, correctly maintained car with clean ownership story',
            summary:
              'On the GR Yaris, ownership story matters more than trim complexity. The best cars are the ones with honest servicing, sympathetic use, and no obvious low-budget performance modifications.',
            recommendedFeatures: [
              'Factory-standard or lightly modified example with clear documentation.',
              'High-quality tyres and strong evidence of regular fluid care.',
              'A clean underside and honest body condition rather than a cosmetically perfect but mechanically vague car.',
            ],
            avoidIf: [
              'The car has been modified heavily with no clear professional setup record.',
              'Clutch feel, drivetrain feel, or alignment behaviour seem off on test drive.',
              'The seller talks about performance upgrades more than maintenance discipline.',
            ],
          },
          faceliftGuide: [
            {
              area: 'Lifecycle split',
              preLciYears: 'Early pre-update: 2020 to 2024',
              preLci:
                'Early GR Yaris cars established the formula and remain the core used market reference point.',
              lciYears: 'Updated version: 2024 onward',
              lci:
                'Toyota revised the car with powertrain and cockpit updates, creating a more mature later version rather than a purely cosmetic change.',
              buyerImpact:
                'Earlier cars still deliver the iconic character, while later cars offer the more developed package if budget allows.',
            },
          ],
          serviceSchedule: [
            {
              item: 'Engine oil service',
              interval: 'Regular annual or mileage-based maintenance',
              detail:
                'Oil quality matters heavily on a turbocharged performance three-cylinder that may see hard use.',
            },
            {
              item: 'Brake fluid and inspection',
              interval: 'Routine time-based maintenance; sooner for hard use',
              detail:
                'Cars used enthusiastically should be monitored more closely than the average Toyota hatchback.',
            },
          ],
          fluidRequirements: [
            {
              item: 'Engine oil',
              spec: 'Toyota-approved performance-grade oil for the exact engine application',
              note:
                'Use the correct Toyota-approved oil for the G16E-GTS engine and ownership use case.',
            },
            {
              item: 'Coolant',
              spec: 'Toyota-approved coolant only',
              note:
                'Correct coolant matters on a compact high-output turbo engine that can see track or spirited-road temperatures.',
            },
            {
              item: 'Fuel',
              spec: 'Premium unleaded petrol',
              note:
                'Premium fuel is the sensible baseline for consistent performance on the GR Yaris.',
            },
          ],
          recalls: [
            {
              title: 'VIN-specific recall verification required',
              recallNumber: 'Check exact VIN',
              recallDate: 'Before purchase',
              summary:
                'Always check the exact GR Yaris against the UK recall database and Toyota dealer network before buying.',
              appliesNote:
                'Do not assume recall status from forum discussion alone.',
              sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          ownerReportedIssues: [
            'Most owner discussion centres on usage pattern, modification, and crash history rather than one dominant factory defect.',
            'Clutches, tyres, and consumables can age quickly on cars that have been driven as intended.',
            'Insurance and theft concerns can be part of the ownership picture in some areas.',
          ],
          engineFaults: [
            'The key risk is not that the engine is weak by default, but that performance modifications and hard use can change the reliability story quickly.',
            'Careless tuning, poor oil discipline, and repeated heat cycling are bigger concerns than normal Toyota ownership expectations would suggest.',
          ],
          sourceLinks: [
            {
              label: 'Toyota UK GR Yaris',
              url: 'https://www.toyota.co.uk/new-cars/gr-yaris',
            },
            {
              label: 'UK Government vehicle recalls checker',
              url: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          disclaimer:
            'Recall status should always be checked against the exact VIN before purchase. Owner-reported issues are curated enthusiast context, not official Toyota bulletins.',
        },
      },
    ],
  },
  {
    slug: 'nissan',
    name: 'Nissan',
    description:
      'Nissan remains one of the most visible UK mainstream brands, combining family-car practicality with standout crossovers and a few enthusiast halo names.',
    signature: 'High-volume family appeal, familiar packaging, and approachable daily usability.',
    availableColours: ['Pearl Black', 'Gun Metallic', 'Magnetic Blue', 'Ceramic Grey'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #111827 0%, #2563eb 42%, #dbeafe 100%)',
    },
    models: [
      {
        slug: 'qashqai-e-power',
        name: 'Qashqai e-POWER',
        category: 'Family crossover',
        shortDescription:
          'A UK family crossover built around efficient everyday driving rather than outright performance numbers.',
        longDescription:
          'The Qashqai e-POWER is one of the most important mainstream UK Nissan products because it blends crossover practicality, a familiar driving position, and electrified efficiency without forcing buyers into a plug-in routine.',
        designStory:
          'Nissan keeps the Qashqai contemporary rather than aggressive, using layered surfaces and upright crossover proportions that feel immediately family-oriented.',
        overview:
          'This is the type of car many UK buyers actually purchase, which makes ownership clarity and running-confidence information more valuable than headline performance.',
        image: createCarImage({
          body: '#dbe1e8',
          accent: '#1d4ed8',
          glow: '#93c5fd',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #2563eb 38%, #dbeafe 100%)',
        colours: [
          { name: 'Pearl Black', hex: '#111827' },
          { name: 'Gun Metallic', hex: '#64748b' },
          { name: 'Magnetic Blue', hex: '#1d4ed8' },
        ],
        specs: {
          power: '190 hp',
          zeroToSixty: '7.9 s',
          topSpeed: '105 mph',
          drivetrain: 'FWD',
          transmission: 'e-POWER drive system',
          seats: '5',
          fuelType: 'Petrol hybrid',
          bodyStyle: 'SUV',
        },
        ownershipInfo: {
          title: 'Ownership, servicing, recalls, and known issues',
          officialSummary:
            'The Qashqai e-POWER should be viewed as a mainstream family car with hybrid-system complexity rather than as a conventional petrol-only crossover. Service history, software updates, and honest family-use wear all matter more than badge image.',
          ownershipRiskSummary: {
            rating: 'Low to moderate',
            summary:
              'This is one of the lower-risk ownership propositions in the wider catalog if bought well, but buyers should still treat hybrid-system confidence, software behaviour, and full-service history seriously.',
            watchouts: [
              'Family crossovers often hide cosmetic wear and neglected tyres despite looking mechanically healthy on paper.',
              'Software behaviour, warning lights, and hybrid-system confidence should be checked carefully during a proper road test.',
              'A cheap example with vague history can still become irritating even if the underlying platform is mainstream.',
            ],
            bestBuyWindow:
              'A later J12 e-POWER car with full Nissan history and clean everyday wear is the safest buy.',
          },
          bestSpecToBuy: {
            title: 'Best used buy: later e-POWER car with cameras and family-use history',
            summary:
              'On the Qashqai, the best examples are usually the well-kept family cars with decent visibility technology, clean service history, and no sign of neglect rather than the cheapest cars on the market.',
            recommendedFeatures: [
              'Parking cameras and driver-assistance features that add value in daily family use.',
              'A clean hybrid-system and warning-light history.',
              'Evidence of regular tyre replacement and routine consumable care.',
            ],
            avoidIf: [
              'The car has patchy history, warning lights, or obvious cabin neglect.',
              'It has cheap tyres and signs of cost-cutting on routine maintenance.',
              'The seller cannot clearly explain service timing or recent work.',
            ],
          },
          faceliftGuide: [
            {
              area: 'Lifecycle split',
              preLciYears: 'Current J12 shape: 2021 onward',
              preLci:
                'The present-generation Qashqai remains the core UK reference point and is still the main used-market shape.',
              lciYears: 'Full UK LCI split not yet established',
              lci:
                'No mature facelift divide is yet established for the e-POWER in the same way as older long-run models.',
              buyerImpact:
                'Buy by condition, equipment, and service history rather than waiting for an LCI label here.',
            },
          ],
          serviceSchedule: [
            {
              item: 'Routine service and inspection',
              interval: 'Annual or mileage-based servicing',
              detail:
                'Keep the service history clean and do not treat the hybrid hardware as an excuse to ignore ordinary crossover maintenance.',
            },
          ],
          fluidRequirements: [
            {
              item: 'Engine oil',
              spec: 'Nissan-approved oil for the exact powertrain application',
              note:
                'The e-POWER system still relies on correct servicing of the petrol engine element and supporting systems.',
            },
            {
              item: 'Coolant',
              spec: 'Nissan-approved coolant only',
              note:
                'Hybrid systems and supporting cooling circuits should be treated with the same care as the combustion side of the vehicle.',
            },
          ],
          recalls: [
            {
              title: 'VIN-specific recall verification required',
              recallNumber: 'Check exact VIN',
              recallDate: 'Before purchase',
              summary:
                'The safe assumption is to verify the exact vehicle with Nissan and the UK recall database before purchase.',
              appliesNote:
                'Check the exact registration or VIN rather than assuming all cars share the same campaign history.',
              sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          ownerReportedIssues: [
            'Most complaints are around software behaviour, ergonomics, and family-car wear rather than dramatic mechanical failures.',
            'Tyres, suspension feel, and general cabin wear are worth checking closely on heavily used family cars.',
          ],
          engineFaults: [
            'This is not presented as a major engine-problem car in the way some performance platforms are, but hybrid-system confidence and warning-light behaviour still matter.',
            'Neglect and poor servicing are more credible ownership risks than a single headline defect.',
          ],
          sourceLinks: [
            {
              label: 'Nissan UK Qashqai',
              url: 'https://www.nissan.co.uk/vehicles/new-vehicles/qashqai.html',
            },
            {
              label: 'UK Government vehicle recalls checker',
              url: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          disclaimer:
            'Recall status should always be checked against the exact VIN before purchase. Owner-reported issues are curated market context, not official Nissan technical bulletins.',
        },
      },
    ],
  },
  {
    slug: 'skoda',
    name: 'Skoda',
    description:
      'Skoda has become one of the UK’s strongest value-plus choices by pairing Volkswagen Group engineering with practical packaging and clear trim logic.',
    signature: 'Space efficiency, strong value, and understated fast-road variants.',
    availableColours: ['Steel Grey', 'Race Blue', 'Moon White', 'Black Magic'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #111827 0%, #166534 45%, #dcfce7 100%)',
    },
    models: [
      {
        slug: 'octavia-vrs',
        name: 'Octavia vRS',
        category: 'Performance hatchback',
        shortDescription:
          'A practical UK performance all-rounder that delivers pace without sacrificing daily usability.',
        longDescription:
          'The Octavia vRS remains one of the most useful enthusiast-friendly cars in the UK market because it blends Volkswagen Group performance hardware with real family practicality and relatively discreet styling.',
        designStory:
          'Skoda uses crisp wagon-or-hatch proportions, subtle performance detailing, and restrained surfacing to make the vRS feel mature rather than shouty.',
        overview:
          'For buyers who want one car to do almost everything, the Octavia vRS often makes more sense than a flashier badge with less room and no real-world practicality advantage.',
        image: createCarImage({
          body: '#e2e8f0',
          accent: '#16a34a',
          glow: '#86efac',
        }),
        imageBackground:
          'linear-gradient(135deg, #0f172a 0%, #166534 40%, #dcfce7 100%)',
        colours: [
          { name: 'Steel Grey', hex: '#94a3b8' },
          { name: 'Race Blue', hex: '#1d4ed8' },
          { name: 'Moon White', hex: '#f8fafc' },
        ],
        specs: {
          power: '265 hp',
          zeroToSixty: '6.4 s',
          topSpeed: '155 mph',
          drivetrain: 'FWD',
          transmission: 'DSG automatic',
          seats: '5',
          fuelType: 'Petrol',
          bodyStyle: 'Hatchback',
        },
        ownershipInfo: {
          title: 'Ownership, servicing, recalls, and known issues',
          officialSummary:
            'The Octavia vRS combines mainstream-group servicing with fast-road consumables and Volkswagen Group petrol-turbo realities. Buyers should think in terms of disciplined maintenance and honest family-car wear, not just low-cost hot-hatch ownership.',
          ownershipRiskSummary: {
            rating: 'Moderate',
            summary:
              'The vRS is usually a manageable ownership proposition if bought carefully, but turbo-petrol servicing, DSG behaviour, and the condition spread of used examples still matter a lot.',
            watchouts: [
              'DSG servicing and gearbox behaviour deserve close attention.',
              'Front tyres, brakes, and alignment tell you quickly whether the car has been run cheaply.',
              'Cheap modifications can drag a good platform down fast.',
            ],
            bestBuyWindow:
              'A facelifted, well-maintained car with clear DSG and consumable history is usually the best value point.',
          },
          bestSpecToBuy: {
            title: 'Best used buy: updated vRS with strong service history and sensible road use',
            summary:
              'The ideal vRS is not the most modified one. It is the honest, well-kept example with documented maintenance, quality tyres, and no vague DSG or engine-management story.',
            recommendedFeatures: [
              'Updated car where possible for fresher cabin tech and used-market appeal.',
              'Clear gearbox and servicing evidence.',
              'A sensible road-focused setup rather than low-budget cosmetic modification.',
            ],
            avoidIf: [
              'The DSG feels inconsistent or the history avoids gearbox servicing detail.',
              'The car wears budget tyres and shows signs of cheap ownership.',
              'You are relying on seller claims rather than documented maintenance.',
            ],
          },
          faceliftGuide: [
            {
              area: 'Lifecycle split',
              preLciYears: 'Earlier Mk4 shape: 2020 to 2024',
              preLci:
                'Earlier Mk4 vRS cars established the formula with the first version of the current platform and cabin presentation.',
              lciYears: 'Updated version: 2024 onward',
              lci:
                'The later update refreshed the Octavia range and keeps the car feeling more current in the used market.',
              buyerImpact:
                'Earlier cars can still be excellent value, but later examples will usually feel fresher in the cabin and easier to sell on.',
            },
          ],
          serviceSchedule: [
            {
              item: 'Routine servicing',
              interval: 'Annual or flexible servicing depending on use profile',
              detail:
                'The safest approach is disciplined servicing rather than stretching intervals because the badge appears more practical than premium.',
            },
            {
              item: 'Gearbox service',
              interval: 'DSG maintenance as required by the transmission application',
              detail:
                'Confirm the exact gearbox-service requirement for the car rather than assuming every DSG shares the same schedule.',
            },
          ],
          fluidRequirements: [
            {
              item: 'Engine oil',
              spec: 'VW Group-approved oil for the exact EA888 application',
              note:
                'Use the precise approval for the VIN and service regime rather than generic turbo petrol oil.',
            },
            {
              item: 'Coolant',
              spec: 'VW Group-approved coolant only',
              note:
                'Correct coolant chemistry matters on modern EA888-powered cars.',
            },
          ],
          recalls: [
            {
              title: 'VIN-specific recall verification required',
              recallNumber: 'Check exact VIN',
              recallDate: 'Before purchase',
              summary:
                'Always confirm open campaigns with Skoda or the UK recall checker before buying.',
              appliesNote:
                'Use the exact registration or VIN rather than a broad model assumption.',
              sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          ownerReportedIssues: [
            'Most complaints revolve around infotainment frustration, tyres, and general maintenance variation rather than a single defining failure.',
            'Used examples vary a lot because some are treated as sensible family cars and others as budget hot hatches.',
          ],
          engineFaults: [
            'The underlying EA888 family is well known, but oil discipline, cooling-system health, and modification quality still matter.',
            'Gearbox condition and calibration feel can change the ownership impression more than the raw engine itself.',
          ],
          sourceLinks: [
            {
              label: 'Skoda UK Octavia vRS',
              url: 'https://www.skoda.co.uk/models/octavia/octavia-vrs',
            },
            {
              label: 'UK Government vehicle recalls checker',
              url: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          disclaimer:
            'Recall status should always be checked against the exact VIN before purchase. Owner-reported issues are curated market context, not official Skoda technical bulletins.',
        },
      },
    ],
  },
  {
    slug: 'mazda',
    name: 'Mazda',
    description:
      'Mazda occupies a valuable middle ground in the UK market by combining Japanese reliability appeal with more driver-focused tuning than many direct rivals.',
    signature: 'Clean design, lightness, and driver-focused engineering without luxury-brand complexity.',
    availableColours: ['Soul Red Crystal', 'Machine Grey', 'Deep Crystal Blue', 'Arctic White'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #111827 0%, #7f1d1d 44%, #fee2e2 100%)',
    },
    models: [
      {
        slug: 'mx-5-rf',
        name: 'MX-5 RF',
        category: 'Roadster',
        shortDescription:
          'A lightweight two-seat sports car that stays appealing because it remains simple, tactile, and honest.',
        longDescription:
          'The MX-5 RF gives UK buyers the classic MX-5 formula with a more coupe-like retractable-fastback feel, making it one of the few modern sports cars that still prioritises lightness and driver involvement over raw power.',
        designStory:
          'Mazda keeps the MX-5 tight, low, and minimal, which helps the RF look special without needing oversized wings or exaggerated bodywork.',
        overview:
          'This is the opposite of the current fast-AWD performance saloon formula: lighter, simpler, cheaper to run, and built around enjoyment rather than numbers.',
        image: createCarImage({
          body: '#f87171',
          accent: '#7f1d1d',
          glow: '#fecaca',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #991b1b 40%, #fee2e2 100%)',
        colours: [
          { name: 'Soul Red Crystal', hex: '#b91c1c' },
          { name: 'Machine Grey', hex: '#6b7280' },
          { name: 'Deep Crystal Blue', hex: '#1e3a8a' },
        ],
        specs: {
          power: '184 hp',
          zeroToSixty: '6.5 s',
          topSpeed: '136 mph',
          drivetrain: 'RWD',
          transmission: 'Manual',
          seats: '2',
          fuelType: 'Petrol',
          bodyStyle: 'Roadster',
        },
        ownershipInfo: {
          title: 'Ownership, servicing, recalls, and known issues',
          officialSummary:
            'The MX-5 RF is one of the simpler enthusiast ownership propositions in the wider catalog, but it still rewards routine servicing, clean rust prevention habits, and careful inspection of wear points on used examples.',
          ownershipRiskSummary: {
            rating: 'Low to moderate',
            summary:
              'The MX-5 RF is lower risk than most turbocharged AWD performance cars here, but age, corrosion prevention, and honest enthusiast use still matter. The car is simple by modern standards, not maintenance-free.',
            watchouts: [
              'Check body condition and underside care carefully, especially on UK-used cars.',
              'Tyres, alignment, and suspension wear affect how the car feels more than on a normal hatchback.',
              'Modified exhaust and suspension setups can improve or ruin the ownership experience depending on quality.',
            ],
            bestBuyWindow:
              'A tidy, standard or sensibly modified car with strong maintenance evidence and careful winter care is the safest buy.',
          },
          bestSpecToBuy: {
            title: 'Best used buy: later 2.0 RF manual with clean chassis condition',
            summary:
              'For most enthusiasts, the best MX-5 RF is a later 2.0 manual with honest maintenance, good tyres, and no obvious low-budget modifications. Chassis condition matters more than chasing rare trim pieces.',
            recommendedFeatures: [
              'Manual gearbox for the most widely desired enthusiast setup.',
              'Evidence of corrosion prevention and careful cleaning habits.',
              'Good tyres and an honest suspension setup rather than slammed or poorly aligned modifications.',
            ],
            avoidIf: [
              'The underside or arches show signs of neglect.',
              'The car has cheap coilovers or loud modifications with no supporting quality story.',
              'Panel condition and roof operation history feel vague.',
            ],
          },
          faceliftGuide: [
            {
              area: 'Lifecycle split',
              preLciYears: 'Earlier ND / ND2 references: 2016 to 2023',
              preLci:
                'Earlier RF cars already capture the core formula and dominate the used market.',
              lciYears: 'Updated 2024-on detail refresh',
              lci:
                'Later cars brought incremental updates rather than a total character change.',
              buyerImpact:
                'Buy mainly by condition, engine, and modification history rather than expecting a revolutionary facelift split.',
            },
          ],
          serviceSchedule: [
            {
              item: 'Routine servicing',
              interval: 'Annual maintenance is the sensible ownership pattern',
              detail:
                'Light sports cars respond well to disciplined annual servicing rather than long deferred intervals.',
            },
          ],
          fluidRequirements: [
            {
              item: 'Engine oil',
              spec: 'Mazda-approved oil for the Skyactiv-G engine application',
              note:
                'Use the correct Mazda-approved oil rather than generic low-cost alternatives.',
            },
            {
              item: 'Coolant',
              spec: 'Mazda-approved coolant only',
              note:
                'Keep the cooling system straightforward and correctly maintained.',
            },
          ],
          recalls: [
            {
              title: 'VIN-specific recall verification required',
              recallNumber: 'Check exact VIN',
              recallDate: 'Before purchase',
              summary:
                'Always verify the exact MX-5 RF against UK recall records before buying.',
              appliesNote:
                'Use the vehicle-specific recall check rather than relying on general owner discussion.',
              sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          ownerReportedIssues: [
            'Most ownership complaints are about wear, corrosion prevention, and modifications rather than serious engine drama.',
            'Tyres and suspension choices dramatically affect how special the car feels.',
          ],
          engineFaults: [
            'The main risk profile is age, wear, and owner modification choices rather than a notorious core engine issue.',
            'Neglected rust prevention on a UK sports car can become more serious than the engine itself.',
          ],
          sourceLinks: [
            {
              label: 'Mazda UK MX-5 RF',
              url: 'https://www.mazda.co.uk/cars/mazda-mx-5-rf/',
            },
            {
              label: 'UK Government vehicle recalls checker',
              url: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          disclaimer:
            'Recall status should always be checked against the exact VIN before purchase. Owner-reported issues are curated market context, not official Mazda technical bulletins.',
        },
      },
    ],
  },
  {
    slug: 'volkswagen',
    name: 'Volkswagen',
    description:
      'Volkswagen remains one of the strongest UK volume brands because it can cover family-car rationality and hot-hatch desirability inside the same familiar range.',
    signature: 'Strong badge familiarity, broad trim spread, and mature everyday usability.',
    availableColours: ['Lapiz Blue', 'Pure White', 'Grenadilla Black', 'Moonstone Grey'],
    theme: {
      heroGradient: 'linear-gradient(135deg, #0f172a 0%, #1d4ed8 44%, #dbeafe 100%)',
    },
    models: [
      {
        slug: 'golf-r',
        name: 'Golf R',
        category: 'Performance hatchback',
        shortDescription:
          'An all-weather fast hatch that balances huge pace with the familiarity of a mainstream family car.',
        longDescription:
          'The Golf R remains one of the default UK performance-car answers because it combines serious pace, usable packaging, and a badge most buyers already understand.',
        designStory:
          'Volkswagen keeps the Golf R visually controlled, using subtle aerodynamic cues and small detail upgrades rather than exaggerated bodywork.',
        overview:
          'For buyers who want a fast hatch without the noise or theatre of more extrovert alternatives, the Golf R stays near the top of the shortlist.',
        image: createCarImage({
          body: '#dbeafe',
          accent: '#1d4ed8',
          glow: '#93c5fd',
        }),
        imageBackground:
          'linear-gradient(135deg, #111827 0%, #1d4ed8 40%, #dbeafe 100%)',
        colours: [
          { name: 'Lapiz Blue', hex: '#1d4ed8' },
          { name: 'Pure White', hex: '#f8fafc' },
          { name: 'Moonstone Grey', hex: '#9ca3af' },
        ],
        specs: {
          power: '333 hp',
          zeroToSixty: '4.6 s',
          topSpeed: '168 mph',
          drivetrain: 'AWD',
          transmission: 'DSG automatic',
          seats: '5',
          fuelType: 'Petrol',
          bodyStyle: 'Hatchback',
        },
        ownershipInfo: {
          title: 'Ownership, servicing, recalls, and known issues',
          officialSummary:
            'The Golf R mixes Volkswagen Group servicing conventions with performance-hatch consumable costs. Buyers should take tyres, gearbox servicing, software behaviour, and modification history seriously.',
          ownershipRiskSummary: {
            rating: 'Moderate',
            summary:
              'The Golf R can be an excellent ownership proposition, but it attracts tuning, launch-heavy use, and owners who may understate the importance of tyres, DSG maintenance, and honest service records.',
            watchouts: [
              'DSG condition and service evidence are important.',
              'Mixed tyres and rough alignment behaviour on an AWD fast hatch are immediate warning signs.',
              'Infotainment frustration and software complaints are common talking points on modern Golfs.',
            ],
            bestBuyWindow:
              'A later Mk8 car with clean history, correct tyres, and no questionable tuning story is the best all-round used buy.',
          },
          bestSpecToBuy: {
            title: 'Best used buy: standard or lightly modified car with strong DSG and tyre history',
            summary:
              'The best Golf R is the one that has been maintained properly, not the one with the biggest mod list. Quality tyres, clean servicing, and honest ownership matter more than cosmetic add-ons.',
            recommendedFeatures: [
              'A well-maintained standard or lightly modified car.',
              'Documented DSG servicing where applicable and clean drivetrain behaviour.',
              'Strong evidence of premium tyre replacement and alignment care.',
            ],
            avoidIf: [
              'The car has vague tuning history or cheap hardware modifications.',
              'It wears budget tyres or feels inconsistent under acceleration.',
              'The service history is basic despite a strong asking price.',
            ],
          },
          faceliftGuide: [
            {
              area: 'Lifecycle split',
              preLciYears: 'Mk8 pre-facelift: 2021 to 2024',
              preLci:
                'Early Mk8 Golf R cars brought the current formula but also the first wave of modern Golf digital-interface criticism.',
              lciYears: 'Mk8.5 update: 2024 onward',
              lci:
                'The later update keeps the car feeling fresher and helps smooth some of the criticisms around the first version of the Mk8 experience.',
              buyerImpact:
                'Earlier cars can still be strong buys, but later ones usually feel easier to recommend because they arrive with a more mature market position.',
            },
          ],
          serviceSchedule: [
            {
              item: 'Routine servicing',
              interval: 'Annual or flexible service regime depending on use',
              detail:
                'Fast-hatch buyers are usually better off taking a disciplined annual view rather than stretching intervals.',
            },
            {
              item: 'Gearbox service',
              interval: 'Transmission-specific maintenance requirement',
              detail:
                'Confirm the exact DSG service requirement for the VIN rather than making assumptions across all VW applications.',
            },
          ],
          fluidRequirements: [
            {
              item: 'Engine oil',
              spec: 'VW-approved oil for the exact EA888 performance application',
              note:
                'Use the precise VW approval required for the engine and service regime.',
            },
            {
              item: 'Coolant',
              spec: 'VW-approved coolant only',
              note:
                'Correct coolant is part of keeping a hard-driven turbo car stable over time.',
            },
          ],
          recalls: [
            {
              title: 'VIN-specific recall verification required',
              recallNumber: 'Check exact VIN',
              recallDate: 'Before purchase',
              summary:
                'Always confirm open campaigns with Volkswagen and the UK recall checker before buying.',
              appliesNote:
                'Use the exact registration or VIN rather than relying on general Golf discussion.',
              sourceUrl: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          ownerReportedIssues: [
            'Owners regularly mention software and infotainment frustration alongside ordinary performance-car consumables.',
            'Tyres, gearbox feel, and modification quality shape the ownership story more than one dominant mechanical defect.',
          ],
          engineFaults: [
            'The Golf R relies on known VW Group turbo-petrol fundamentals: good oil discipline, cooling-system care, and sensible modifications.',
            'The risk profile is often more about ownership quality than about a singular headline engine problem.',
          ],
          sourceLinks: [
            {
              label: 'Volkswagen UK Golf R',
              url: 'https://www.volkswagen.co.uk/en/new/golf-r.html',
            },
            {
              label: 'UK Government vehicle recalls checker',
              url: 'https://www.check-vehicle-recalls.service.gov.uk/',
            },
          ],
          disclaimer:
            'Recall status should always be checked against the exact VIN before purchase. Owner-reported issues are curated market context, not official Volkswagen technical bulletins.',
        },
      },
    ],
  },
]

export function getBrandBySlug(slug) {
  return carBrands.find((brand) => brand.slug === slug?.toLowerCase())
}

export function getModelBySlug(brandSlug, modelSlug) {
  const normalizedSlug =
    brandSlug?.toLowerCase() === 'bmw' && modelSlug?.toLowerCase() === '340i'
      ? 'm340i'
      : modelSlug?.toLowerCase()

  return getBrandBySlug(brandSlug)?.models.find(
    (model) => model.slug === normalizedSlug,
  )
}

export function getBrandSummaries() {
  return carBrands.map((brand) => ({
    slug: brand.slug,
    name: brand.name,
    description: brand.description,
    signature: brand.signature,
    availableColours: brand.availableColours,
    theme: brand.theme,
    modelCount: brand.models.length,
  }))
}
