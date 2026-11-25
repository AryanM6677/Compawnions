// ============================================================
// PawPath — Data Layer (California / USD Edition)
// Expanded breeds, hybrids, California-relevant pricing
// ============================================================

export const BREEDS = [
  // ═══════════════════════════════════════════════════════════
  //  PUREBRED DOGS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'golden-retriever', name: 'Golden Retriever', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/golden-retriever.jpg', origin: 'Scotland', size: 'large', weight: '55–75 lbs', lifespan: '10–12 yrs',
    energy: 4, grooming: 3, friendliness: 5, trainability: 5, noise: 2,
    monthlyCost: 250, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    categories: ['kid-friendly', 'high-energy', 'cuddly'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The quintessential family dog — loyal, gentle, and endlessly patient. Goldens are natural people-pleasers who light up every room they walk into.',
    personality: 'Incredibly social, patient with children, and eager to learn. They thrive on human interaction and will follow you from room to room.',
    pros: ['Exceptionally gentle with kids', 'Highly trainable', 'Friendly with everyone', 'Great therapy/emotional support dog'],
    cons: ['Heavy shedding year-round', 'Needs 1–2 hrs exercise daily', 'Prone to hip dysplasia & cancer', 'Not ideal for small apartments'],
    dietaryNotes: 'Can thrive on vet-approved vegetarian diet. Their omnivorous digestive system adapts well to plant-based nutrition with proper supplementation.'
  },
  {
    id: 'labrador', name: 'Labrador Retriever', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/labrador.jpg', origin: 'Canada', size: 'large', weight: '55–80 lbs', lifespan: '10–14 yrs',
    energy: 5, grooming: 2, friendliness: 5, trainability: 5, noise: 2,
    monthlyCost: 230, upfrontCost: 2000,
    gradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
    categories: ['kid-friendly', 'high-energy'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'America\'s #1 dog breed — Labs are the ultimate companion for active California families who love beaches and hikes.',
    personality: 'Bundles of joy with endless energy. Incredibly food-motivated, making training a breeze, but prone to overeating.',
    pros: ['Most versatile family dog', 'Easy to train for first-timers', 'Loves water — perfect for CA beaches', 'Gentle and patient temperament'],
    cons: ['Very high energy needs', 'Prone to obesity', 'Heavy shedding', 'Can be destructive when bored'],
    dietaryNotes: 'Excellent candidate for vegetarian diets. Labs adapt well to new foods. Consult a vet nutritionist for balanced formulation.'
  },
  {
    id: 'french-bulldog', name: 'French Bulldog', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/french-bulldog.jpg', origin: 'France', size: 'small', weight: '16–28 lbs', lifespan: '10–12 yrs',
    energy: 2, grooming: 1, friendliness: 5, trainability: 3, noise: 2,
    monthlyCost: 200, upfrontCost: 4000,
    gradient: 'linear-gradient(135deg, #FB923C, #EA580C)',
    categories: ['apartment-friendly', 'cuddly', 'low-energy'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: true,
    vegetarianDietPossible: true,
    description: 'LA\'s favorite companion — Frenchies are compact, charismatic, and perfectly suited for city apartment living.',
    personality: 'Playful, adaptable, and utterly charming. Frenchies are natural entertainers who bond deeply with their humans.',
    pros: ['Perfect apartment dog', 'Low exercise needs', 'Friendly with everyone', 'Minimal barking'],
    cons: ['Severe breathing issues (brachycephalic)', 'Very expensive to buy', 'Heat-sensitive — caution in CA summers', 'Prone to spine & joint issues'],
    dietaryNotes: 'Adapts well to vegetarian diets. Sensitive digestive systems benefit from high-quality, consistent food. Vet monitoring essential.'
  },
  {
    id: 'german-shepherd', name: 'German Shepherd', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/german-shepherd.jpg', origin: 'Germany', size: 'large', weight: '50–90 lbs', lifespan: '9–13 yrs',
    energy: 5, grooming: 3, friendliness: 3, trainability: 5, noise: 3,
    monthlyCost: 280, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #64748B, #475569)',
    categories: ['high-energy'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'Noble, intelligent, and fiercely loyal — GSDs are the gold standard of working dogs and devoted family protectors.',
    personality: 'Confident, courageous, and incredibly intelligent. They need a job or purpose to be truly happy.',
    pros: ['Extremely intelligent & trainable', 'Loyal and protective', 'Excels at everything', 'Great with active families'],
    cons: ['Needs extensive exercise & mental stimulation', 'Heavy shedding', 'Hip/elbow dysplasia risk', 'Needs experienced handling'],
    dietaryNotes: 'Can transition to vegetarian diet with careful vet supervision. Large breeds need precise protein & calcium ratios.'
  },
  {
    id: 'beagle', name: 'Beagle', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/beagle.jpg', origin: 'England', size: 'medium', weight: '20–30 lbs', lifespan: '12–15 yrs',
    energy: 4, grooming: 1, friendliness: 4, trainability: 3, noise: 4,
    monthlyCost: 170, upfrontCost: 1500,
    gradient: 'linear-gradient(135deg, #F97316, #DC2626)',
    categories: ['high-energy', 'kid-friendly'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'Curious, merry, and driven by their legendary nose — Beagles pack a big personality into a compact, lovable frame.',
    personality: 'Scent hounds who follow their nose everywhere. Playful, curious, and love company.',
    pros: ['Great size for apartments', 'Wonderful with children', 'Low grooming needs', 'Sturdy and healthy'],
    cons: ['Very vocal — howls & bays', 'Stubborn & hard to recall', 'Escape artists', 'Separation anxiety prone'],
    dietaryNotes: 'Adapts well to vegetarian diets. Food-driven nature means easy food transition. Monitor weight.'
  },
  {
    id: 'corgi', name: 'Pembroke Welsh Corgi', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/corgi.jpg', origin: 'Wales', size: 'small', weight: '25–30 lbs', lifespan: '12–15 yrs',
    energy: 4, grooming: 2, friendliness: 4, trainability: 4, noise: 3,
    monthlyCost: 180, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
    categories: ['apartment-friendly', 'cuddly'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'Internet-famous and impossibly cute — Corgis are surprisingly athletic herding dogs in a compact, fluffy body.',
    personality: 'Smart, bold, and full of personality. Corgis are natural comedians with a strong herding instinct.',
    pros: ['Perfect size for apartments', 'Highly intelligent', 'Great with families', 'Iconic, adorable appearance'],
    cons: ['Heavy shedders', 'Prone to back problems', 'Can be nippy (herding instinct)', 'Surprisingly high energy'],
    dietaryNotes: 'Good candidate for vegetarian diets. Obesity-prone, so a well-measured plant-based diet can help weight management.'
  },
  {
    id: 'australian-shepherd', name: 'Australian Shepherd', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/australian-shepherd.jpg', origin: 'United States', size: 'medium', weight: '40–65 lbs', lifespan: '12–15 yrs',
    energy: 5, grooming: 3, friendliness: 4, trainability: 5, noise: 3,
    monthlyCost: 220, upfrontCost: 2000,
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    categories: ['high-energy'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The California adventure dog — Aussies are brilliant, athletic, and born for hiking trails and beach runs.',
    personality: 'Incredibly smart and driven. Aussies need a job — agility, herding, or trail running. They\'re velcro dogs who bond intensely.',
    pros: ['Stunning looks — merle coats', 'Brilliant and trainable', 'Perfect hiking companion', 'Great at dog sports'],
    cons: ['Needs 2+ hours of exercise daily', 'Can develop neurotic behaviors if bored', 'Heavy shedding', 'Herding instinct with kids'],
    dietaryNotes: 'Active breeds can do well on vegetarian diets with adequate calorie and protein balance. Vet oversight essential.'
  },
  {
    id: 'siberian-husky', name: 'Siberian Husky', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/siberian-husky.jpg', origin: 'Siberia, Russia', size: 'medium', weight: '35–60 lbs', lifespan: '12–14 yrs',
    energy: 5, grooming: 4, friendliness: 4, trainability: 2, noise: 5,
    monthlyCost: 240, upfrontCost: 2000,
    gradient: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
    categories: ['high-energy'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'Striking, dramatic, and wildly independent — Huskies are working sled dogs with wolf-like beauty and a mind of their own.',
    personality: 'Free-spirited, vocal, and mischievous. Huskies are pack animals who love running and howling more than obeying.',
    pros: ['Stunningly beautiful', 'Great with kids & other dogs', 'Incredibly athletic', 'Friendly, non-aggressive'],
    cons: ['Near-impossible recall off-leash', 'Extreme shedding twice a year', 'Very vocal — howls constantly', 'Challenging in CA heat'],
    dietaryNotes: 'Can adapt to vegetarian diets but high activity means higher protein needs. Consult a sports-dog nutritionist.'
  },
  {
    id: 'shih-tzu', name: 'Shih Tzu', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/shih-tzu.jpg', origin: 'China/Tibet', size: 'small', weight: '9–16 lbs', lifespan: '10–18 yrs',
    energy: 2, grooming: 5, friendliness: 4, trainability: 3, noise: 2,
    monthlyCost: 170, upfrontCost: 2000,
    gradient: 'linear-gradient(135deg, #EC4899, #DB2777)',
    categories: ['apartment-friendly', 'cuddly', 'low-energy'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The ultimate lap dog — bred to be companions for Chinese royalty. They take their cuddling duties very seriously.',
    personality: 'Affectionate, outgoing, and happy. People-oriented dogs that bond deeply. Content with short walks and long naps.',
    pros: ['Perfect for apartments', 'Low exercise needs', 'Minimal shedding (hypoallergenic)', 'Great for seniors'],
    cons: ['High grooming maintenance', 'Breathing issues', 'Stubborn with training', 'Heat-sensitive'],
    dietaryNotes: 'Excellent for vegetarian households. Use vet-formulated small-breed vegetarian kibble.'
  },
  {
    id: 'pomeranian', name: 'Pomeranian', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/pomeranian.jpg', origin: 'Germany/Poland', size: 'small', weight: '3–7 lbs', lifespan: '12–16 yrs',
    energy: 3, grooming: 4, friendliness: 3, trainability: 3, noise: 4,
    monthlyCost: 160, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #F472B6, #EC4899)',
    categories: ['apartment-friendly', 'cuddly'],
    apartmentFriendly: true, kidFriendly: false, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'Tiny in size, enormous in personality — Poms are fluffy little firecrackers who think they\'re Great Danes.',
    personality: 'Bold, vivacious, and feisty. Loyal to their person but suspicious of strangers.',
    pros: ['Perfect for any home size', 'Big personality, small package', 'Long lifespan', 'Portable'],
    cons: ['Can be yappy', 'Fragile — not ideal with small kids', 'High grooming', 'Small dog syndrome risk'],
    dietaryNotes: 'Can do well on vegetarian diet. Small breed = precise nutrition matters. Use vet-approved small-breed formulas.'
  },
  {
    id: 'dachshund', name: 'Dachshund', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/dachshund.jpg', origin: 'Germany', size: 'small', weight: '11–32 lbs', lifespan: '12–16 yrs',
    energy: 3, grooming: 2, friendliness: 3, trainability: 3, noise: 3,
    monthlyCost: 160, upfrontCost: 1800,
    gradient: 'linear-gradient(135deg, #A78BFA, #7C3AED)',
    categories: ['apartment-friendly', 'cuddly'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: true,
    vegetarianDietPossible: true,
    description: 'The iconic "wiener dog" — playful, courageous, and surprisingly clever.',
    personality: 'Brave, curious, and comically stubborn. Have a surprisingly deep bark for their size.',
    pros: ['Great apartment dogs', 'Low-moderate exercise needs', 'Very loyal', 'Multiple coat varieties'],
    cons: ['Back problems (IVDD)', 'Stubborn', 'Prone to obesity', 'Can be territorial'],
    dietaryNotes: 'Vegetarian diet works well. Weight management is crucial due to their spine.'
  },
  {
    id: 'cavalier', name: 'Cavalier King Charles Spaniel', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/cavalier.jpg', origin: 'England', size: 'small', weight: '12–18 lbs', lifespan: '9–14 yrs',
    energy: 2, grooming: 3, friendliness: 5, trainability: 4, noise: 1,
    monthlyCost: 190, upfrontCost: 3000,
    gradient: 'linear-gradient(135deg, #C084FC, #A855F7)',
    categories: ['apartment-friendly', 'cuddly', 'low-energy', 'kid-friendly'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The perfect companion — Cavaliers are gentle, elegant, and adapt to any lifestyle. The "comforter spaniel" of royalty.',
    personality: 'Sweet, gentle, and incredibly adaptable. Happy on the couch or on a walk. They read your mood perfectly.',
    pros: ['Ideal apartment companion', 'Great with kids and seniors', 'Extremely gentle', 'Quiet — rarely barks'],
    cons: ['Heart disease risk (MVD)', 'Can\'t tolerate extreme heat well', 'Moderate shedding', 'Can be clingy'],
    dietaryNotes: 'Adapts well to vegetarian diets. Heart-healthy nutrition is important for this breed — omega-3 supplementation recommended.'
  },
  {
    id: 'chihuahua', name: 'Chihuahua', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/chihuahua.jpg', origin: 'Mexico', size: 'small', weight: '2–6 lbs', lifespan: '14–20 yrs',
    energy: 3, grooming: 1, friendliness: 2, trainability: 3, noise: 5,
    monthlyCost: 120, upfrontCost: 1500,
    gradient: 'linear-gradient(135deg, #FB7185, #E11D48)',
    categories: ['apartment-friendly'],
    apartmentFriendly: true, kidFriendly: false, hypoallergenic: false, lowMaintenance: true,
    vegetarianDietPossible: true,
    description: 'Sassy, fierce, and fiercely loyal — Chihuahuas pack the attitude of a wolf into the world\'s smallest dog.',
    personality: 'Bold, alert, and devoted to one person. They can be suspicious of strangers but are intensely loyal.',
    pros: ['Longest lifespan of any dog breed', 'Extremely portable', 'Very low maintenance', 'Great for solo owners'],
    cons: ['Can be very yappy', 'Fragile — not for kids', 'Difficult to housetrain', 'Can be aggressive with strangers'],
    dietaryNotes: 'Tiny stomach means every bite counts. Vet-formulated vegetarian small-breed food works well.'
  },
  {
    id: 'border-collie', name: 'Border Collie', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/border-collie.jpg', origin: 'Scotland/England', size: 'medium', weight: '30–55 lbs', lifespan: '12–15 yrs',
    energy: 5, grooming: 3, friendliness: 3, trainability: 5, noise: 3,
    monthlyCost: 200, upfrontCost: 2000,
    gradient: 'linear-gradient(135deg, #1E293B, #475569)',
    categories: ['high-energy'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The Einstein of dogs — Border Collies are the most intelligent breed on the planet and need an owner who can keep up.',
    personality: 'Intensely focused, workaholic, and brilliantly smart. They need a job or they\'ll create one (often destructively).',
    pros: ['Smartest dog breed in the world', 'Incredibly trainable', 'Excels at agility & sports', 'Athletic hiking companion'],
    cons: ['Can be neurotic without enough stimulation', 'Strong herding instinct', 'Not a couch potato', 'May herd children/cats'],
    dietaryNotes: 'Active breeds can thrive on vegetarian diets with adequate calorie content. Consult a sports nutrition vet.'
  },
  {
    id: 'boxer', name: 'Boxer', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/boxer.jpg', origin: 'Germany', size: 'large', weight: '50–80 lbs', lifespan: '10–12 yrs',
    energy: 4, grooming: 1, friendliness: 5, trainability: 4, noise: 2,
    monthlyCost: 230, upfrontCost: 2000,
    gradient: 'linear-gradient(135deg, #D97706, #92400E)',
    categories: ['kid-friendly', 'high-energy'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The eternal puppy — Boxers never grow out of their playful, goofy phase and are fiercely protective of their families.',
    personality: 'Playful, loyal, and clownish. Boxers are patient with children and naturally protective without being aggressive.',
    pros: ['Amazing with children', 'Naturally protective', 'Low grooming', 'Endlessly playful'],
    cons: ['High energy needs', 'Brachycephalic breathing issues', 'Prone to cancer', 'Drools & snores'],
    dietaryNotes: 'Can adapt to vegetarian diets. Brachycephalic breeds benefit from easy-to-digest, high-quality plant-based food.'
  },
  {
    id: 'great-dane', name: 'Great Dane', type: 'dog', hybrid: false,
    imageUrl: '/assets/images/breeds/great-dane.jpg', origin: 'Germany', size: 'large', weight: '110–175 lbs', lifespan: '7–10 yrs',
    energy: 2, grooming: 1, friendliness: 5, trainability: 3, noise: 2,
    monthlyCost: 350, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #6366F1, #4338CA)',
    categories: ['cuddly', 'low-energy'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The "Apollo of Dogs" — Great Danes are gentle giants who think they\'re lap dogs. Surprisingly calm for their enormous size.',
    personality: 'Sweet, affectionate, and patient. Despite their size, they\'re couch potatoes who want to lean on you. Literally.',
    pros: ['Incredibly gentle', 'Surprisingly low exercise needs', 'Great with kids', 'Majestic presence'],
    cons: ['Short lifespan', 'Expensive — everything is supersized', 'Drools heavily', 'Prone to bloat & heart issues'],
    dietaryNotes: 'Large breed vegetarian diets require careful formulation. Bloat risk means meal management is critical.'
  },

  // ═══════════════════════════════════════════════════════════
  //  HYBRID / DESIGNER DOGS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'goldendoodle', name: 'Goldendoodle', type: 'dog', hybrid: true,
    parentBreeds: ['Golden Retriever', 'Poodle'],
    imageUrl: '/assets/images/breeds/goldendoodle.jpg', origin: 'USA/Australia', size: 'medium', weight: '30–75 lbs', lifespan: '10–15 yrs',
    energy: 4, grooming: 4, friendliness: 5, trainability: 5, noise: 2,
    monthlyCost: 250, upfrontCost: 3500,
    gradient: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
    categories: ['kid-friendly', 'cuddly', 'hypoallergenic'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'California\'s most popular designer dog — the Goldendoodle combines Golden Retriever friendliness with Poodle intelligence and low-shedding coats.',
    personality: 'Outgoing, smart, and incredibly friendly. Goldendoodles inherit the best of both parents — trainable, loving, and great with everyone.',
    pros: ['Low to no shedding', 'Extremely friendly & social', 'Highly trainable', 'Great for allergy sufferers'],
    cons: ['Expensive to purchase', 'High grooming (professional every 6-8 weeks)', 'Unpredictable coat types', 'Can have health issues from both breeds'],
    dietaryNotes: 'Excellent on vegetarian diets. Active breed benefits from balanced plant-based nutrition with vet guidance.'
  },
  {
    id: 'labradoodle', name: 'Labradoodle', type: 'dog', hybrid: true,
    parentBreeds: ['Labrador Retriever', 'Poodle'],
    imageUrl: '/assets/images/breeds/labradoodle.jpg', origin: 'Australia', size: 'medium', weight: '30–65 lbs', lifespan: '12–14 yrs',
    energy: 4, grooming: 4, friendliness: 5, trainability: 5, noise: 2,
    monthlyCost: 240, upfrontCost: 3000,
    gradient: 'linear-gradient(135deg, #A78BFA, #8B5CF6)',
    categories: ['kid-friendly', 'hypoallergenic'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The original designer breed — bred to be hypoallergenic guide dogs, Labradoodles combine Lab loyalty with Poodle smarts.',
    personality: 'Energetic, affectionate, and eager to please. They\'re natural therapy dogs and love being part of family activities.',
    pros: ['Hypoallergenic coats', 'Excellent temperament', 'Very trainable', 'Great service/therapy dogs'],
    cons: ['Expensive', 'Coat requires frequent professional grooming', 'High energy', 'Variable traits between litters'],
    dietaryNotes: 'Thrives on balanced vegetarian diets. Prone to food allergies — plant-based diets can actually help.'
  },
  {
    id: 'cockapoo', name: 'Cockapoo', type: 'dog', hybrid: true,
    parentBreeds: ['Cocker Spaniel', 'Poodle'],
    imageUrl: '/assets/images/breeds/cockapoo.jpg', origin: 'USA', size: 'small', weight: '12–25 lbs', lifespan: '14–18 yrs',
    energy: 3, grooming: 3, friendliness: 5, trainability: 4, noise: 2,
    monthlyCost: 170, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #FB923C, #F97316)',
    categories: ['apartment-friendly', 'cuddly', 'hypoallergenic', 'kid-friendly'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'One of the oldest and most beloved designer breeds — Cockapoos are cheerful, low-shedding, and fit perfectly into apartment life.',
    personality: 'Happy, social, and eager to please. They inherit the Cocker\'s sweetness and the Poodle\'s intelligence.',
    pros: ['Great apartment size', 'Hypoallergenic', 'Very long lifespan', 'Sweet & even temperament'],
    cons: ['Can develop separation anxiety', 'Regular grooming needed', 'May inherit ear problems', 'Can be barky if not trained'],
    dietaryNotes: 'Adapts beautifully to vegetarian diets. Smaller size means easier to balance nutrition with vet guidance.'
  },
  {
    id: 'bernedoodle', name: 'Bernedoodle', type: 'dog', hybrid: true,
    parentBreeds: ['Bernese Mountain Dog', 'Poodle'],
    imageUrl: '/assets/images/breeds/bernedoodle.jpg', origin: 'USA', size: 'large', weight: '50–90 lbs', lifespan: '12–18 yrs',
    energy: 3, grooming: 4, friendliness: 5, trainability: 4, noise: 1,
    monthlyCost: 280, upfrontCost: 4500,
    gradient: 'linear-gradient(135deg, #1E293B, #334155)',
    categories: ['cuddly', 'kid-friendly', 'hypoallergenic'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The teddy bear giant — Bernedoodles combine Bernese loyalty and gentleness with Poodle intelligence and a longer lifespan.',
    personality: 'Loyal, goofy, and incredibly sweet. They\'re gentle giants who love to cuddle and play equally.',
    pros: ['Longer lifespan than purebred Bernese', 'Hypoallergenic', 'Incredibly gentle & loving', 'Beautiful tri-color coats'],
    cons: ['Very expensive', 'Large size needs space', 'Heavy grooming needs', 'Can be stubborn as puppies'],
    dietaryNotes: 'Large breed vegetarian diets need careful formulation. Their Bernese side benefits from joint-supporting supplements.'
  },
  {
    id: 'cavapoo', name: 'Cavapoo', type: 'dog', hybrid: true,
    parentBreeds: ['Cavalier King Charles Spaniel', 'Poodle'],
    imageUrl: '/assets/images/breeds/cavapoo.jpg', origin: 'Australia', size: 'small', weight: '9–25 lbs', lifespan: '12–16 yrs',
    energy: 2, grooming: 3, friendliness: 5, trainability: 4, noise: 1,
    monthlyCost: 165, upfrontCost: 3500,
    gradient: 'linear-gradient(135deg, #E879F9, #C026D3)',
    categories: ['apartment-friendly', 'cuddly', 'low-energy', 'hypoallergenic'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The ultimate companion hybrid — Cavapoos are gentle, quiet, and impossibly sweet. Perfect for first-time dog owners.',
    personality: 'Calm, affectionate, and devoted. Cavapoos inherit the Cavalier\'s gentle nature and the Poodle\'s hypoallergenic coat.',
    pros: ['Perfect apartment companion', 'Very quiet — rarely barks', 'Hypoallergenic', 'Great for first-time owners'],
    cons: ['Prone to heart issues (from Cavalier)', 'Can be clingy', 'Professional grooming needed', 'Expensive to purchase'],
    dietaryNotes: 'Excellent on vegetarian diet. Heart-healthy nutrition important — omega fatty acids recommended.'
  },
  {
    id: 'maltipoo', name: 'Maltipoo', type: 'dog', hybrid: true,
    parentBreeds: ['Maltese', 'Poodle'],
    imageUrl: '/assets/images/breeds/maltipoo.jpg', origin: 'USA', size: 'small', weight: '5–15 lbs', lifespan: '12–16 yrs',
    energy: 3, grooming: 4, friendliness: 4, trainability: 4, noise: 3,
    monthlyCost: 150, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #F9A8D4, #F472B6)',
    categories: ['apartment-friendly', 'cuddly', 'hypoallergenic'],
    apartmentFriendly: true, kidFriendly: false, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'Fluffy cloud in dog form — Maltipoos are tiny, affectionate, and perfect for apartment dwellers who want a cuddly companion.',
    personality: 'Playful, affectionate, and charming. They love lap time and will follow you everywhere.',
    pros: ['Hypoallergenic', 'Perfect apartment size', 'Very affectionate', 'Adaptable to any lifestyle'],
    cons: ['Can be yappy', 'Too fragile for rough kids', 'Grooming-intensive', 'May develop separation anxiety'],
    dietaryNotes: 'Does well on vegetarian diet. Tiny breeds need nutrient-dense, small-portion meals.'
  },
  {
    id: 'pomsky', name: 'Pomsky', type: 'dog', hybrid: true,
    parentBreeds: ['Pomeranian', 'Siberian Husky'],
    imageUrl: '/assets/images/breeds/pomsky.jpg', origin: 'USA', size: 'small', weight: '15–30 lbs', lifespan: '12–15 yrs',
    energy: 4, grooming: 4, friendliness: 3, trainability: 3, noise: 4,
    monthlyCost: 190, upfrontCost: 4000,
    gradient: 'linear-gradient(135deg, #93C5FD, #60A5FA)',
    categories: ['apartment-friendly'],
    apartmentFriendly: true, kidFriendly: false, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'A mini Husky — Pomskies are stunningly beautiful designer dogs with the look of a Husky in a compact, apartment-friendly package.',
    personality: 'Sassy, energetic, and independent. They inherit the Husky\'s dramatic personality and the Pom\'s boldness.',
    pros: ['Stunning Husky looks in small package', 'Apartment-compatible size', 'Unique appearance', 'Conversation starter'],
    cons: ['Very vocal — howls & barks', 'Stubborn & independent', 'Heavy shedding', 'Expensive & hard to find'],
    dietaryNotes: 'Can adapt to vegetarian diets. Their Husky heritage means they benefit from quality nutrition.'
  },
  {
    id: 'aussiedoodle', name: 'Aussiedoodle', type: 'dog', hybrid: true,
    parentBreeds: ['Australian Shepherd', 'Poodle'],
    imageUrl: '/assets/images/breeds/aussiedoodle.jpg', origin: 'USA', size: 'medium', weight: '25–70 lbs', lifespan: '10–13 yrs',
    energy: 5, grooming: 4, friendliness: 4, trainability: 5, noise: 2,
    monthlyCost: 230, upfrontCost: 3000,
    gradient: 'linear-gradient(135deg, #34D399, #10B981)',
    categories: ['high-energy', 'hypoallergenic'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: true,
    description: 'The genius adventure dog — Aussiedoodles combine Aussie athleticism with Poodle smarts and a low-shedding coat. Perfect for active CA lifestyles.',
    personality: 'Incredibly smart, athletic, and loving. They excel at everything — from trail running to trick training.',
    pros: ['Hypoallergenic', 'Brilliantly intelligent', 'Great for active owners', 'Beautiful merle coat possible'],
    cons: ['Extremely high exercise needs', 'Can be neurotic if under-stimulated', 'Expensive grooming', 'Variable size'],
    dietaryNotes: 'High-energy dogs need calorie-dense vegetarian diets. Plant-based protein mixes with vet supervision work well.'
  },

  // ═══════════════════════════════════════════════════════════
  //  PUREBRED CATS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'persian', name: 'Persian', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/persian.jpg', origin: 'Iran/Persia', size: 'medium', weight: '7–12 lbs', lifespan: '12–17 yrs',
    energy: 1, grooming: 5, friendliness: 3, trainability: 2, noise: 1,
    monthlyCost: 180, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #F1F5F9, #CBD5E1)',
    categories: ['cuddly', 'low-energy', 'apartment-friendly'],
    apartmentFriendly: true, kidFriendly: false, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'The aristocrat of cats — Persians are calm, elegant, and prefer a quiet life of luxury on the softest surface available.',
    personality: 'Gentle, sweet, and prefer a serene environment. Not jumpers or climbers — they\'d rather lounge in a sunbeam.',
    pros: ['Very calm and quiet', 'Beautiful, regal appearance', 'Great for apartment living', 'Low activity needs'],
    cons: ['Extremely high grooming (daily brushing)', 'Breathing & eye issues', 'Kidney disease prone', 'Not great with noisy kids'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat-based diet. Cannot synthesize taurine or arachidonic acid from plants.'
  },
  {
    id: 'siamese', name: 'Siamese', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/siamese.jpg', origin: 'Thailand', size: 'medium', weight: '6–14 lbs', lifespan: '12–20 yrs',
    energy: 4, grooming: 1, friendliness: 5, trainability: 4, noise: 5,
    monthlyCost: 150, upfrontCost: 1500,
    gradient: 'linear-gradient(135deg, #BFDBFE, #93C5FD)',
    categories: ['high-energy', 'cuddly'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'The most vocal and social of all cats — Siamese will have full conversations with you and follow you like a shadow.',
    personality: 'Extremely social, intelligent, and demanding. They form deep bonds and can become depressed if left alone.',
    pros: ['Extremely intelligent', 'Very social & affectionate', 'Low grooming', 'Stunning appearance'],
    cons: ['Very vocal — meows constantly', 'Needs lots of attention', 'Separation anxiety prone', 'Can be demanding'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat-based diet. Taurine deficiency leads to heart disease and blindness.'
  },
  {
    id: 'maine-coon', name: 'Maine Coon', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/maine-coon.jpg', origin: 'United States', size: 'large', weight: '10–25 lbs', lifespan: '10–15 yrs',
    energy: 3, grooming: 4, friendliness: 5, trainability: 4, noise: 2,
    monthlyCost: 200, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #92400E, #78350F)',
    categories: ['cuddly', 'kid-friendly'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'The "gentle giant" — Maine Coons are dog-like in loyalty and affection, wrapped in a magnificent, fluffy package.',
    personality: 'Playful, gentle, and dog-like. They enjoy fetch, follow owners around, and are great with kids.',
    pros: ['Gentle giant — great with kids', 'Dog-like loyalty', 'Intelligent and trainable', 'Sociable with other pets'],
    cons: ['Very large — needs space', 'High grooming', 'Prone to HCM', 'Expensive to feed'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat-based diet. Large body mass means higher taurine requirements.'
  },
  {
    id: 'ragdoll', name: 'Ragdoll', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/ragdoll.jpg', origin: 'United States', size: 'large', weight: '10–20 lbs', lifespan: '12–17 yrs',
    energy: 2, grooming: 3, friendliness: 5, trainability: 3, noise: 1,
    monthlyCost: 180, upfrontCost: 2000,
    gradient: 'linear-gradient(135deg, #C4B5FD, #A78BFA)',
    categories: ['cuddly', 'apartment-friendly', 'low-energy'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'Named for going limp when picked up — Ragdolls are living, purring stuffed animals who exist to be loved.',
    personality: 'Extremely docile, calm, and affectionate. Follow owners room to room. Often called "puppy cats."',
    pros: ['Incredibly gentle', 'Great with children', 'Loves to be held', 'Quiet and non-destructive'],
    cons: ['Must be indoor only', 'Heart disease prone', 'Regular grooming needed', 'Can be too passive'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Ragdolls are prone to heart conditions; taurine is essential.'
  },
  {
    id: 'british-shorthair', name: 'British Shorthair', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/british-shorthair.jpg', origin: 'United Kingdom', size: 'medium', weight: '9–18 lbs', lifespan: '12–20 yrs',
    energy: 2, grooming: 2, friendliness: 3, trainability: 2, noise: 1,
    monthlyCost: 150, upfrontCost: 2000,
    gradient: 'linear-gradient(135deg, #6B7280, #4B5563)',
    categories: ['low-maintenance', 'apartment-friendly', 'low-energy'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: true,
    vegetarianDietPossible: false,
    description: 'The dignified Brit — calm, independent, and easygoing. They\'ll love you deeply but on their own terms.',
    personality: 'Calm, easygoing, and not demanding. Enjoy companionship but value independence.',
    pros: ['Very calm and easygoing', 'Low grooming & exercise needs', 'Sturdy and healthy', 'Great for professionals'],
    cons: ['Can be aloof', 'Prone to obesity', 'Not very playful', 'Can be stubborn'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Obesity tendency means proper animal-protein nutrition is critical.'
  },
  {
    id: 'bengal', name: 'Bengal', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/bengal.jpg', origin: 'United States', size: 'medium', weight: '8–15 lbs', lifespan: '12–16 yrs',
    energy: 5, grooming: 1, friendliness: 3, trainability: 4, noise: 3,
    monthlyCost: 180, upfrontCost: 3000,
    gradient: 'linear-gradient(135deg, #D97706, #B45309)',
    categories: ['high-energy'],
    apartmentFriendly: false, kidFriendly: false, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'A miniature leopard — Bengals are wild, athletic, and breathtakingly beautiful. Not for the faint of heart.',
    personality: 'Hyperactive, athletic, and mischievous. Love water, climbing, and puzzle toys.',
    pros: ['Stunning wild appearance', 'Hypoallergenic coat', 'Extremely intelligent', 'Loves water & tricks'],
    cons: ['Extremely high energy', 'Can be destructive if bored', 'Expensive', 'Not a cuddly lap cat'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Higher protein needs due to athletic nature.'
  },
  {
    id: 'scottish-fold', name: 'Scottish Fold', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/scottish-fold.jpg', origin: 'Scotland', size: 'medium', weight: '6–13 lbs', lifespan: '11–15 yrs',
    energy: 2, grooming: 2, friendliness: 4, trainability: 3, noise: 1,
    monthlyCost: 170, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #FCA5A5, #F87171)',
    categories: ['apartment-friendly', 'cuddly', 'low-energy'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: true,
    vegetarianDietPossible: false,
    description: 'Owl-like folded ears and round faces make Scottish Folds one of the most Instagram-worthy breeds alive.',
    personality: 'Calm, sweet, and adaptable. They sit in "Buddha position" and love being near their humans.',
    pros: ['Incredibly cute folded ears', 'Very calm temperament', 'Great apartment cats', 'Good with children'],
    cons: ['Joint & cartilage problems (genetic)', 'Can be expensive', 'Ethical concerns with breeding', 'May develop arthritis'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Joint-supporting nutrition with glucosamine is especially important.'
  },
  {
    id: 'russian-blue', name: 'Russian Blue', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/russian-blue.jpg', origin: 'Russia', size: 'medium', weight: '7–15 lbs', lifespan: '15–20 yrs',
    energy: 2, grooming: 1, friendliness: 3, trainability: 3, noise: 1,
    monthlyCost: 140, upfrontCost: 1500,
    gradient: 'linear-gradient(135deg, #94A3B8, #64748B)',
    categories: ['apartment-friendly', 'low-maintenance', 'low-energy', 'hypoallergenic'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: true, lowMaintenance: true,
    vegetarianDietPossible: false,
    description: 'Elegant, mysterious, and low-maintenance — Russian Blues are the introvert\'s perfect cat. Silvery-blue coat and emerald eyes.',
    personality: 'Quiet, gentle, and loyal to their family. Reserved with strangers but deeply bonded to owners.',
    pros: ['Hypoallergenic', 'Very long lifespan', 'Low maintenance', 'Quiet and gentle'],
    cons: ['Can be shy with strangers', 'Routine-dependent', 'Reserved, not overtly affectionate', 'Can be skittish'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Generally healthy breed but proper animal protein is non-negotiable.'
  },
  {
    id: 'abyssinian', name: 'Abyssinian', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/abyssinian.jpg', origin: 'Ethiopia', size: 'medium', weight: '6–10 lbs', lifespan: '14–17 yrs',
    energy: 5, grooming: 1, friendliness: 4, trainability: 4, noise: 2,
    monthlyCost: 150, upfrontCost: 1800,
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    categories: ['high-energy'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'The most athletic and curious of all cats — Abyssinians are perpetual kittens who never stop exploring.',
    personality: 'Extremely active, curious, and social. They need vertical space and interactive play daily.',
    pros: ['Extremely intelligent', 'Very active and playful', 'Low grooming', 'Long lifespan'],
    cons: ['Very high energy', 'Can be destructive', 'Needs constant stimulation', 'Not a lap cat'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Active cats need high-protein, meat-based diets.'
  },
  {
    id: 'sphynx', name: 'Sphynx', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/sphynx.jpg', origin: 'Canada', size: 'medium', weight: '6–12 lbs', lifespan: '12–16 yrs',
    energy: 4, grooming: 3, friendliness: 5, trainability: 4, noise: 3,
    monthlyCost: 200, upfrontCost: 3500,
    gradient: 'linear-gradient(135deg, #FCA5A5, #F87171)',
    categories: ['cuddly', 'apartment-friendly', 'hypoallergenic'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'The alien-looking sweetheart — hairless, warm to the touch, and absurdly affectionate. Dogs in cat bodies.',
    personality: 'Extroverts — love being center of attention, hate being alone, greet every visitor at the door.',
    pros: ['Hypoallergenic — no fur', 'Extremely social', 'Dog-like loyalty', 'Unique appearance'],
    cons: ['Needs regular skin baths', 'Temperature-sensitive', 'Very expensive', 'Prone to HCM'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Higher metabolism (to maintain body heat) demands energy-dense animal protein.'
  },
  {
    id: 'american-shorthair', name: 'American Shorthair', type: 'cat', hybrid: false,
    imageUrl: '/assets/images/breeds/american-shorthair.jpg', origin: 'United States', size: 'medium', weight: '8–15 lbs', lifespan: '15–20 yrs',
    energy: 3, grooming: 1, friendliness: 4, trainability: 3, noise: 1,
    monthlyCost: 120, upfrontCost: 1200,
    gradient: 'linear-gradient(135deg, #6EE7B7, #34D399)',
    categories: ['low-maintenance', 'apartment-friendly', 'kid-friendly'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: true,
    vegetarianDietPossible: false,
    description: 'America\'s cat — hardy, easygoing, and incredibly low-maintenance. The perfect all-around family cat.',
    personality: 'Balanced, calm, and friendly. Good with everyone, adaptable to any household.',
    pros: ['Very long lifespan', 'Extremely low maintenance', 'Great with families', 'Healthy & hardy'],
    cons: ['Not the most playful', 'Can be independent', 'Prone to weight gain', 'Not exotic-looking'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Weight management with proper animal-protein diet is important.'
  },

  // ═══════════════════════════════════════════════════════════
  //  HYBRID / DESIGNER CATS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'savannah', name: 'Savannah Cat', type: 'cat', hybrid: true,
    parentBreeds: ['African Serval', 'Domestic Cat'],
    imageUrl: '/assets/images/breeds/savannah.jpg', origin: 'USA', size: 'large', weight: '12–25 lbs', lifespan: '12–20 yrs',
    energy: 5, grooming: 1, friendliness: 3, trainability: 4, noise: 2,
    monthlyCost: 250, upfrontCost: 8000,
    gradient: 'linear-gradient(135deg, #CA8A04, #A16207)',
    categories: ['high-energy'],
    apartmentFriendly: false, kidFriendly: false, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'The most exotic domestic cat — Savannahs are wild-looking, athletic, and can be walked on a leash. Part African Serval.',
    personality: 'Dog-like, loyal, and adventurous. They love water, can jump 8 feet high, and need outdoor enrichment.',
    pros: ['Stunningly exotic appearance', 'Dog-like — can walk on leash', 'Extremely intelligent', 'Very long lifespan'],
    cons: ['Illegal in some CA cities — check local laws', 'Extremely expensive', 'Needs huge space', 'Not a typical house cat'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Wild heritage means even higher protein requirements.'
  },
  {
    id: 'toyger', name: 'Toyger', type: 'cat', hybrid: true,
    parentBreeds: ['Bengal', 'Domestic Shorthair'],
    imageUrl: '/assets/images/breeds/toyger.jpg', origin: 'USA', size: 'medium', weight: '7–15 lbs', lifespan: '12–15 yrs',
    energy: 3, grooming: 1, friendliness: 4, trainability: 4, noise: 2,
    monthlyCost: 160, upfrontCost: 3000,
    gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
    categories: ['apartment-friendly', 'cuddly'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: false, lowMaintenance: true,
    vegetarianDietPossible: false,
    description: 'A miniature tiger — Toygers were bred to look like tiny tigers with bold stripes and a muscular build. Much calmer than Bengals.',
    personality: 'Relaxed, friendly, and trainable. Unlike their Bengal ancestors, Toygers are calm and easygoing.',
    pros: ['Tiger-like appearance', 'Much calmer than Bengal', 'Trainable & friendly', 'Low grooming'],
    cons: ['Expensive & rare', 'Still needs interactive play', 'Not widely available', 'May have Bengal-like energy spurts'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Wild heritage means they need animal protein.'
  },
  {
    id: 'cheetoh', name: 'Cheetoh', type: 'cat', hybrid: true,
    parentBreeds: ['Bengal', 'Ocicat'],
    imageUrl: '/assets/images/breeds/cheetoh.jpg', origin: 'USA', size: 'large', weight: '12–23 lbs', lifespan: '12–14 yrs',
    energy: 4, grooming: 1, friendliness: 5, trainability: 4, noise: 2,
    monthlyCost: 180, upfrontCost: 2500,
    gradient: 'linear-gradient(135deg, #FBBF24, #D97706)',
    categories: ['kid-friendly', 'cuddly'],
    apartmentFriendly: false, kidFriendly: true, hypoallergenic: false, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'A wild-looking gentle giant — Cheetohs combine Bengal spots with Ocicat friendliness. They look fierce but are incredibly sweet.',
    personality: 'Gentle, social, and playful. Despite wild looks, they\'re loving family cats who get along with everyone.',
    pros: ['Wild appearance, gentle nature', 'Great with kids & other pets', 'Very social', 'Unique breed — conversation starter'],
    cons: ['Large — needs space', 'Active — needs enrichment', 'Rare — hard to find breeders', 'Can be expensive'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Their large size needs adequate animal protein.'
  },
  {
    id: 'bambino', name: 'Bambino', type: 'cat', hybrid: true,
    parentBreeds: ['Sphynx', 'Munchkin'],
    imageUrl: '/assets/images/breeds/bambino.jpg', origin: 'USA', size: 'small', weight: '5–9 lbs', lifespan: '12–15 yrs',
    energy: 3, grooming: 3, friendliness: 5, trainability: 3, noise: 2,
    monthlyCost: 180, upfrontCost: 3500,
    gradient: 'linear-gradient(135deg, #FDA4AF, #FB7185)',
    categories: ['apartment-friendly', 'cuddly', 'hypoallergenic'],
    apartmentFriendly: true, kidFriendly: true, hypoallergenic: true, lowMaintenance: false,
    vegetarianDietPossible: false,
    description: 'Hairless and short-legged — Bambinos are the ultimate quirky companion. Part Sphynx warmth, part Munchkin charm.',
    personality: 'Affectionate, playful, and full of personality. They love attention and are surprisingly agile despite short legs.',
    pros: ['Hypoallergenic — no fur', 'Very affectionate', 'Great apartment size', 'Unique appearance'],
    cons: ['Ethical concerns (short legs)', 'Skin care needs', 'Temperature-sensitive', 'Very expensive & rare'],
    dietaryNotes: '⚠️ OBLIGATE CARNIVORE — Requires meat. Higher metabolic rate (hairless) needs energy-dense animal protein.'
  }
];

// ─── ALTERNATIVE PETS ────────────────────────────────────
export const ALTERNATIVE_PETS = [
  {
    id: 'rabbit', name: 'Rabbit', emoji: '🐇', type: 'herbivore', diet: '100% Herbivore',
    lifespan: '8–12 yrs', monthlyCost: 80, size: 'Small', energy: 3, affection: 4,
    gradient: 'linear-gradient(135deg, #FCD34D, #FBBF24)', apartmentFriendly: true,
    description: 'Gentle, affectionate, and completely plant-powered. Rabbits bond deeply and can be litter-trained.',
    pros: ['100% herbivore — perfect for vegetarian homes', 'Can be litter-trained', 'Very affectionate when bonded', 'Quiet and apartment-friendly'],
    cons: ['Fragile — need gentle handling', 'Chew everything — rabbit-proofing needed', 'Need daily fresh hay & veggies', 'Specialized vet care (exotic)']
  },
  {
    id: 'guinea-pig', name: 'Guinea Pig', emoji: '🐹', type: 'herbivore', diet: '100% Herbivore',
    lifespan: '5–7 yrs', monthlyCost: 50, size: 'Small', energy: 2, affection: 4,
    gradient: 'linear-gradient(135deg, #FCA5A5, #F87171)', apartmentFriendly: true,
    description: 'Social, vocal, and endlessly charming. Guinea pigs "wheek" with joy when they see you!',
    pros: ['100% herbivore', 'Very social & responsive', 'Great for kids', 'Low space requirements'],
    cons: ['Need a companion (pairs recommended)', 'Cage needs regular cleaning', 'Prone to vitamin C deficiency', 'Short lifespan']
  },
  {
    id: 'hamster', name: 'Hamster', emoji: '🐹', type: 'omnivore', diet: 'Primarily Herbivore',
    lifespan: '2–3 yrs', monthlyCost: 25, size: 'Tiny', energy: 3, affection: 2,
    gradient: 'linear-gradient(135deg, #FDBA74, #FB923C)', apartmentFriendly: true,
    description: 'Tiny, independent, and entertaining. Perfect starter pets for people with limited space.',
    pros: ['Very low cost & space needs', 'Independent', 'Entertaining to watch', 'No walking needed'],
    cons: ['Nocturnal — active at night', 'Short lifespan', 'Can bite if startled', 'Not very cuddly']
  },
  {
    id: 'budgie', name: 'Budgerigar (Budgie)', emoji: '🦜', type: 'herbivore', diet: '100% Herbivore',
    lifespan: '5–10 yrs', monthlyCost: 35, size: 'Tiny', energy: 4, affection: 3,
    gradient: 'linear-gradient(135deg, #6EE7B7, #34D399)', apartmentFriendly: true,
    description: 'Colorful, musical, and surprisingly smart. Budgies can learn words, do tricks, and serenade you.',
    pros: ['100% plant-based diet', 'Can learn to talk', 'Beautiful & colorful', 'Long lifespan for size'],
    cons: ['Can be noisy', 'Need daily social interaction', 'Messy — scatter seeds', 'Regular cage cleaning']
  }
];

// ─── QUIZ STEPS ──────────────────────────────────────────
export const QUIZ_STEPS = [
  {
    id: 'motivation', question: 'Why do you want a pet?', subtitle: 'Pick what resonates most with you', type: 'single',
    options: [
      { id: 'companionship', emoji: '🤗', label: 'Companionship', desc: 'A buddy to come home to' },
      { id: 'exercise', emoji: '🏃', label: 'Exercise Partner', desc: 'Someone to keep me active' },
      { id: 'family', emoji: '👨‍👩‍👧', label: 'Family Addition', desc: 'A new member for the household' },
      { id: 'mental-health', emoji: '🧘', label: 'Mental Health', desc: 'Emotional support & comfort' },
      { id: 'curiosity', emoji: '🤔', label: 'First-Time Curiosity', desc: 'I\'ve always wanted one!' },
      { id: 'protection', emoji: '🛡️', label: 'Protection', desc: 'Security and peace of mind' },
      { id: 'service', emoji: '🦮', label: 'Service / Support', desc: 'I need a trained assistance or therapy animal' }
    ]
  },
  {
    id: 'experience', question: 'What\'s your experience level?', subtitle: 'Be honest — some pets are harder than others', type: 'single',
    options: [
      { id: 'novice', emoji: '🌱', label: 'First-Time Owner', desc: 'I am completely new to this' },
      { id: 'familiar', emoji: '🏡', label: 'Family Pets', desc: 'Had them growing up' },
      { id: 'experienced', emoji: '🎓', label: 'Experienced', desc: 'I\'ve raised pets on my own' },
      { id: 'pro', emoji: '👑', label: 'Pro / Trainer', desc: 'Highly experienced handler' }
    ]
  },
  {
    id: 'pet-type', question: 'Dog person or cat person?', subtitle: 'Or maybe you\'re open to both?', type: 'single',
    options: [
      { id: 'dog', emoji: '🐕', label: 'Dog', desc: 'Loyal, active, always by your side' },
      { id: 'cat', emoji: '🐱', label: 'Cat', desc: 'Independent, graceful, low-key' },
      { id: 'both', emoji: '🐾', label: 'Open to Both', desc: 'Show me all the options!' }
    ]
  },
  {
    id: 'living', question: 'What\'s your living situation?', subtitle: 'This helps us match the right size', type: 'single',
    options: [
      { id: 'studio', emoji: '🏢', label: 'Studio / Small Apt', desc: 'Under 600 sq ft' },
      { id: 'apartment', emoji: '🏠', label: '1–2 Bed Apartment', desc: 'Standard city living' },
      { id: 'house', emoji: '🏡', label: 'House with Yard', desc: 'Room to run around' },
      { id: 'shared', emoji: '👥', label: 'Shared Apartment', desc: 'Living with roommates' },
      { id: 'farm', emoji: '🌾', label: 'Farm / Acreage', desc: 'Unlimited space to roam' },
      { id: 'rv', emoji: '🚐', label: 'RV / Vanlife', desc: 'Constant travel, small space' }
    ]
  },
  {
    id: 'energy', question: 'What\'s your energy level?', subtitle: 'Be honest — your pet should match you!', type: 'slider',
    min: 1, max: 5,
    labels: ['Couch Potato 🛋️', 'Casual Walker 🚶', 'Moderately Active 🚴', 'Very Active ⚡', 'Athlete 🏃‍♀️']
  },
  {
    id: 'time', question: 'How much time can you dedicate daily?', subtitle: 'Including walks, feeding, play, and grooming', type: 'single',
    options: [
      { id: 'minimal', emoji: '⏰', label: '30 min – 1 hour', desc: 'I\'m very busy' },
      { id: 'moderate', emoji: '🕐', label: '1 – 2 hours', desc: 'I can make time' },
      { id: 'good', emoji: '🕑', label: '2 – 4 hours', desc: 'I have a flexible schedule' },
      { id: 'plenty', emoji: '🕒', label: '4+ hours', desc: 'I work from home / I\'m free' }
    ]
  },
  {
    id: 'noise-tolerance', question: 'How do you feel about noise?', subtitle: 'Barking, howling, and meowing', type: 'single',
    options: [
      { id: 'ninja', emoji: '🥷', label: 'Silence is Golden', desc: 'Apartment walls are thin' },
      { id: 'moderate', emoji: '🔔', label: 'Occasional Sounds', desc: 'A few barks or meows are fine' },
      { id: 'vocal', emoji: '📢', label: 'I Love a Chatty Pet', desc: 'Howlers and talkers welcome!' }
    ]
  },
  {
    id: 'grooming', question: 'How much grooming are you willing to do?', subtitle: 'Brushing, washing, and professional cuts', type: 'single',
    options: [
      { id: 'low', emoji: '🧼', label: 'Wash & Go', desc: 'Zero maintenance, short hair' },
      { id: 'medium', emoji: '🪮', label: 'Casual Brushing', desc: 'A quick brush once a week' },
      { id: 'high', emoji: '✂️', label: 'High Maintenance', desc: 'Daily brushing & haircuts' }
    ]
  },
  {
    id: 'household', question: 'Tell us about your household', subtitle: 'Select all that apply', type: 'multi',
    options: [
      { id: 'kids', emoji: '👶', label: 'Small Children', desc: 'Under 10 years old' },
      { id: 'elderly', emoji: '👴', label: 'Elderly Members', desc: 'Seniors at home' },
      { id: 'other-pets', emoji: '🐾', label: 'Other Pets', desc: 'Already have a pet' },
      { id: 'allergies', emoji: '🤧', label: 'Allergies', desc: 'Someone has pet allergies' },
      { id: 'vegetarian', emoji: '🌿', label: 'Vegetarian / Vegan', desc: 'No meat in the house' },
      { id: 'visitors', emoji: '🎉', label: 'Frequent Visitors', desc: 'Always hosting people' },
      { id: 'travel', emoji: '✈️', label: 'Frequent Travel', desc: 'Pet needs to handle travel' }
    ]
  },
  {
    id: 'budget', question: 'What\'s your monthly pet budget?', subtitle: 'Food, vet, grooming, insurance — it adds up!', type: 'slider',
    min: 50, max: 500, step: 25, prefix: '$',
    labels: ['$50', '$150', '$250', '$375', '$500+']
  }
];

// ─── COST DATA (USD, California) ─────────────────────────
export const COST_DATA = {
  dog: {
    upfront: {
      'Adoption / Purchase': { min: 50, max: 5000, note: 'Shelters: $50–350, Breeders: $1k–5k+' },
      'First Vet Visit + Vaccines': { min: 200, max: 500, note: 'DHPP, rabies, bordetella, heartworm test' },
      'Spay / Neuter': { min: 200, max: 800, note: 'One-time, strongly recommended' },
      'Bed, Bowl, Leash, Collar': { min: 100, max: 300, note: 'Basic startup kit' },
      'Crate / Carrier': { min: 50, max: 200, note: 'For travel and training' }
    },
    monthly: {
      'Food (Quality)': { min: 50, max: 150, note: 'Depends on breed size' },
      'Treats & Chews': { min: 15, max: 40, note: 'Training rewards & dental health' },
      'Vet Fund': { min: 30, max: 80, note: 'Set aside for checkups & emergencies' },
      'Grooming': { min: 0, max: 100, note: 'Varies hugely by breed' },
      'Pet Insurance': { min: 30, max: 70, note: 'Highly recommended in CA' },
      'Toys & Enrichment': { min: 10, max: 30, note: 'Mental stimulation matters!' }
    },
    emergency: { min: 500, max: 5000, note: 'Surgery, accidents, emergency vet visits — CA vet costs are high' }
  },
  cat: {
    upfront: {
      'Adoption / Purchase': { min: 50, max: 4000, note: 'Shelters: $50–200, Breeders: $500–4k+' },
      'First Vet Visit + Vaccines': { min: 150, max: 400, note: 'FVRCP, rabies' },
      'Spay / Neuter': { min: 200, max: 600, note: 'Crucial for indoor cats too' },
      'Litter Box + Starter Litter': { min: 30, max: 80, note: 'Covered boxes preferred' },
      'Scratching Post + Toys': { min: 40, max: 150, note: 'Save your furniture!' }
    },
    monthly: {
      'Food (Quality)': { min: 30, max: 80, note: 'Wet + dry mix recommended' },
      'Cat Litter': { min: 15, max: 40, note: 'Changed 2–3 times per week' },
      'Vet Fund': { min: 25, max: 60, note: 'Cats hide illness — regular checkups matter' },
      'Grooming': { min: 0, max: 60, note: 'Most cats self-groom. Persians: exception!' },
      'Pet Insurance': { min: 20, max: 50, note: 'Recommended in CA' },
      'Toys & Enrichment': { min: 10, max: 25, note: 'Feather wands, laser pointers, puzzle toys' }
    },
    emergency: { min: 500, max: 4000, note: 'Urinary blockage, dental surgery, emergency vet — CA vet costs are among the highest in the US' }
  }
};

// ─── DIETARY CONTENT ─────────────────────────────────────
export const DIETARY_CONTENT = {
  dog: {
    title: 'For Dogs: Good News 🐕', icon: '✅', verdict: 'Possible with care', verdictClass: 'green',
    summary: 'Dogs are natural omnivores — their digestive systems evolved alongside humans to process a wide variety of foods, including grains, vegetables, and legumes.',
    details: [
      'Modern veterinary science confirms that dogs <strong>can thrive</strong> on a carefully formulated vegetarian diet.',
      'This only works with <strong>commercially prepared, vet-approved food</strong> — not homemade meals.',
      'A board-certified veterinary nutritionist should monitor your dog\'s health with regular blood panels, especially in the first year.',
      'Think of it like raising a child on a specialized diet — absolutely possible, but it takes knowledge and commitment.'
    ],
    tips: [
      'Choose AAFCO-certified vegetarian dog food',
      'Schedule blood work every 6 months initially',
      'Supplement with vet-recommended vitamins',
      'Monitor coat quality, energy, and stool'
    ],
    recommendedFoods: [
      'High-quality grain-inclusive kibble (e.g., Purina Pro Plan, Royal Canin, Hill\'s Science Diet)',
      'Wet food with real meat as the first ingredient for hydration',
      'Fresh/Frozen vet-approved meals (e.g., The Farmer\'s Dog, Nom Nom)',
      'Vegetarian diets *only* if AAFCO-certified and vet-approved (e.g., Natural Balance Vegetarian)'
    ],
    safeTreats: ['Carrots', 'Apples (no core/seeds)', 'Blueberries', 'Plain cooked pumpkin', 'Peanut butter (xylitol-free)'],
    toxicFoods: ['Chocolate', 'Grapes & Raisins', 'Onions & Garlic', 'Macadamia nuts', 'Xylitol (artificial sweetener)'],
    baseDiet: 'High-protein kibble or wet food (chicken, beef, lamb, or fish) mixed with fiber (brown rice, pumpkin).'
  },
  cat: {
    title: 'For Cats: A Harder Truth 🐱', icon: '❌', verdict: 'Not possible — here\'s why', verdictClass: 'red',
    summary: 'Cats are obligate carnivores. Unlike dogs and humans, their bodies cannot synthesize essential nutrients from plant sources.',
    details: [
      'Cats biologically require <strong>taurine</strong> and <strong>arachidonic acid</strong> — nutrients found only in animal tissue.',
      'These aren\'t optional supplements — they are biological necessities that plant sources cannot fully provide.',
      'Without meat-derived nutrition, cats will develop severe, irreversible health problems.'
    ],
    consequences: [
      { icon: '👁️', title: 'Retinal Degeneration', desc: 'Leading to irreversible blindness', severity: 'critical' },
      { icon: '💔', title: 'Dilated Cardiomyopathy', desc: 'Leading to heart failure', severity: 'critical' },
      { icon: '🛡️', title: 'Immune Deficiency', desc: 'Leading to organ failure', severity: 'critical' }
    ],
    closing: 'This isn\'t a lifestyle choice for cats — it\'s how their bodies are built. No amount of supplements can fully replicate what meat provides at a cellular level.',
    recommendedFoods: [
      'High-protein wet food for essential hydration (e.g., Royal Canin, Purina Pro Plan, Fancy Feast)',
      'Dry kibble specifically formulated for obligate carnivores',
      'Raw meat diets ONLY if commercially prepared and pathogen-tested',
      'Taurine-fortified meals'
    ],
    safeTreats: ['Freeze-dried chicken/salmon', 'Cooked plain chicken', 'Small amounts of plain tuna', 'Catnip', 'Cat grass'],
    toxicFoods: ['Lilies (highly toxic)', 'Onions & Garlic', 'Chocolate', 'Grapes & Raisins', 'Raw dough'],
    baseDiet: 'Moisture-rich, high-protein wet food (poultry, fish, beef) supplemented with crunch-promoting kibble.'
  },
  compassionateRedirect: {
    title: 'Your Best Path Forward 💚',
    message: 'We would never want you to compromise your values OR your pet\'s life. Based on your household values, here are companions that will thrive in your home:',
    options: [
      { emoji: '🐕', label: 'A dog on a vet-supervised vegetarian diet plan' },
      { emoji: '🐇', label: 'A rabbit — naturally herbivorous and affectionate' },
      { emoji: '🐹', label: 'A guinea pig — social, gentle, and 100% plant-powered' }
    ],
    closing: 'Every one of these animals deserves love — and every one of them can thrive in your home.'
  }
};

export const MATCH_WEIGHTS = { space: 0.20, energy: 0.20, time: 0.15, budget: 0.15, household: 0.15, motivation: 0.15 };

// ─── TIME COMMITMENT DATA ────────────────────────────────
export const TIME_COMMITMENTS = {
  dog: [
    { activity: 'Morning Walk', duration: '20–40 min', icon: '🌅', daily: true },
    { activity: 'Evening Walk', duration: '20–40 min', icon: '🌆', daily: true },
    { activity: 'Feeding (2x)', duration: '10 min', icon: '🍽️', daily: true },
    { activity: 'Play / Training', duration: '15–30 min', icon: '🎾', daily: true },
    { activity: 'Grooming', duration: '10–60 min', icon: '🪮', daily: false, frequency: '1–3x/week' },
    { activity: 'Vet Visit', duration: '1–2 hours', icon: '🏥', daily: false, frequency: 'Every 6 months' },
    { activity: 'Bath', duration: '30–60 min', icon: '🛁', daily: false, frequency: '1–2x/month' }
  ],
  cat: [
    { activity: 'Feeding (2x)', duration: '10 min', icon: '🍽️', daily: true },
    { activity: 'Litter Box Cleaning', duration: '5–10 min', icon: '🧹', daily: true },
    { activity: 'Play / Interaction', duration: '15–20 min', icon: '🪶', daily: true },
    { activity: 'Grooming', duration: '5–30 min', icon: '🪮', daily: false, frequency: '1–5x/week' },
    { activity: 'Vet Visit', duration: '1–2 hours', icon: '🏥', daily: false, frequency: 'Every 6 months' },
    { activity: 'Litter Replacement', duration: '15 min', icon: '📦', daily: false, frequency: '2–3x/week' }
  ]
};
