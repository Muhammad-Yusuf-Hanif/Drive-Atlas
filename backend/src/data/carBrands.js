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
