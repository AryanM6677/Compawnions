import { BREEDS } from './data';

export interface UserPreferences {
  petType: 'dog' | 'cat' | 'both';
  housing: 'studio' | 'apartment' | 'house' | 'shared';
  energy: number;
  time: number;
  budget: number;
  diet: 'standard' | 'veg';
  hasKids: boolean;
  hasAllergies: boolean;
}

export function calculateMatches(answers: Record<string, any>) {
  const petTypeIdx = answers['pet-type'] ?? 'both';
  let userPetType: 'dog' | 'cat' | 'both' = 'both';
  if (petTypeIdx === 'dog') userPetType = 'dog';
  if (petTypeIdx === 'cat') userPetType = 'cat';

  const userHousing = answers['living'] ?? 'apartment';
  const userEnergy = answers['energy'] ?? 3;
  
  const timeIdx = answers['time'] ?? 'moderate';
  let userTime = 2; // scale of 1-4
  if (timeIdx === 'minimal') userTime = 1;
  if (timeIdx === 'moderate') userTime = 2;
  if (timeIdx === 'good') userTime = 3;
  if (timeIdx === 'plenty') userTime = 4;

  const userBudget = answers['budget'] ?? 250;
  
  const householdArr = (answers['household'] as string[]) || [];
  const isVeg = householdArr.includes('vegetarian');
  const hasKids = householdArr.includes('kids');
  const hasAllergies = householdArr.includes('allergies');
  const hasTravel = householdArr.includes('travel');

  const noiseIdx = answers['noise-tolerance'] ?? 'moderate';
  const groomIdx = answers['grooming'] ?? 'medium';
  const expIdx = answers['experience'] ?? 'familiar';
  const motivationIdx = answers['motivation'] ?? 'companionship';

  const userPref: any = {
    petType: userPetType,
    budget: userBudget,
    housing: userHousing,
    energy: userEnergy,
    time: userTime,
    diet: isVeg ? 'veg' : 'standard',
    hasKids,
    hasAllergies,
    noiseTolerance: noiseIdx,
    grooming: groomIdx,
    experience: expIdx,
    motivation: motivationIdx
  };

  let scored = BREEDS.map(breed => {
    let score = 100;

    // Hard filters & Major deductions
    if (userPref.petType !== 'both' && breed.type !== userPref.petType) score -= 100;
    if (userPref.diet === 'veg' && !breed.vegetarianDietPossible) score -= 80;

    // Budget check
    if (breed.monthlyCost > userPref.budget) {
      score -= Math.min(40, ((breed.monthlyCost - userPref.budget) / 10) * 2);
    }

    // Housing logic
    if ((userPref.housing === 'studio' || userPref.housing === 'apartment') && !breed.apartmentFriendly) score -= 30;
    if (userPref.housing === 'rv' && (breed.size === 'large' || breed.energy >= 4)) score -= 40;
    
    // Energy match
    score -= Math.abs(breed.energy - userPref.energy) * 10;
    
    // Time & Grooming
    const normalizedGrooming = Math.ceil((breed.grooming / 5) * 4);
    score -= Math.abs(normalizedGrooming - userPref.time) * 5;

    if (userPref.grooming === 'low' && breed.grooming > 2) score -= 20;
    if (userPref.grooming === 'high' && breed.grooming < 3) score += 5; // Willing to groom, bonus for high-groom breeds

    // Noise tolerance
    if (userPref.noiseTolerance === 'ninja' && breed.noise >= 3) score -= 25;
    if (userPref.noiseTolerance === 'vocal' && breed.noise >= 4) score += 10; // Loves talkative pets

    // Experience level
    if (userPref.experience === 'novice' && breed.trainability < 3) score -= 15; // Hard to train
    if (userPref.experience === 'novice' && breed.energy >= 5) score -= 15; // Too much to handle
    if (userPref.experience === 'pro') score += 5; // Pros can handle anything

    // Household dynamics
    if (userPref.hasKids && breed.kidFriendly) score += 15;
    else if (userPref.hasKids && !breed.kidFriendly) score -= 25;

    if (userPref.hasAllergies && breed.hypoallergenic) score += 20;
    else if (userPref.hasAllergies && !breed.hypoallergenic) score -= 30;

    // Motivation matches
    if (userPref.motivation === 'protection' && breed.size === 'large' && breed.type === 'dog') score += 15;
    if (userPref.motivation === 'service' && breed.trainability >= 4 && breed.energy <= 4) score += 20; // Best for service/therapy
    if (userPref.motivation === 'companionship' && breed.energy <= 3) score += 10;

    return { ...breed, matchScore: Math.max(0, Math.min(100, Math.round(score))) };
  });

  scored = scored.filter(b => b.matchScore > 0).sort((a, b) => b.matchScore - a.matchScore);

  return { matches: scored.slice(0, 6), userPref };
}
