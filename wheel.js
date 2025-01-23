const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
const dropdown = document.getElementById('mealType');
const wheelContainer = document.querySelector('.wheel-container');
const resultContainer = document.getElementById('result');
const dietaryDropdown = document.getElementById('dietaryPreference');
const mealTypeDropdown = document.getElementById('mealType');

const DAILY_SPIN_LIMIT = 2;
const PREMIUM_KEY = 'wheelPremium';
const SPINS_KEY = 'dailySpins';
const LAST_SPIN_DATE = 'lastSpinDate';

const meals = {
    appetizer: [
        { name: 'Bruschetta' },
        { name: 'Spring Rolls' },
        { name: 'Tomato Soup' },
        { name: 'Greek Salad' },
        { name: 'Buffalo Wings' },
        { name: 'Loaded Nachos' },
        { name: 'Spinach Dip' },
        { name: 'Mozzarella Sticks' },
        { name: 'Garlic Bread' },
        { name: 'Potato Skins' },
        { name: 'Hummus' },
        { name: 'Guacamole' },
        { name: 'Calamari' },
        { name: 'Stuffed Mushrooms' },
        { name: 'Deviled Eggs' },
        { name: 'Chicken Satay' },
        { name: 'Crab Cakes' },
        { name: 'Jalapeño Poppers' },
        { name: 'Shrimp Cocktail' },
        { name: 'Caprese Salad' },
        { name: 'Onion Rings' },
        { name: 'Bacon Wrapped Dates' },
        { name: 'Coconut Shrimp' },
        { name: 'Stuffed Peppers' },
        { name: 'Baked Brie' },
        { name: 'Chicken Wings' },
        { name: 'Edamame' },
        { name: 'Fruit Salsa' },
        { name: 'Cheese Platter' },
        { name: 'Stuffed Dates' },
        { name: 'Zucchini Fritters' },
        { name: 'Beef Tartare' },
        { name: 'Prosciutto Melon' },
        { name: 'Cucumber Bites' },
        { name: 'Salmon Tartare' },
        { name: 'Mushroom Caps' },
        { name: 'Olive Tapenade' },
        { name: 'Pesto Crostini' },
        { name: 'Beef Carpaccio' },
        { name: 'Tempura Veggies' },
        { name: 'Tuna Tartare' },
        { name: 'Spanakopita' },
        { name: 'Arancini' },
        { name: 'Empanadas' },
        { name: 'Samosas' },
        { name: 'Gyoza' },
        { name: 'Ceviche' }
    ],
    entree: [
        // Pasta Dishes
        { name: 'Fettuccine Alfredo' },
        { name: 'Spaghetti and Meatballs' },
        { name: 'Pasta Carbonara' },
        { name: 'Penne Arrabbiata' },
        { name: 'Pasta Primavera' },
        { name: 'Beef Lasagna' },
        
        // Beef Dishes
        { name: 'Pan-Seared Steak' },
        { name: 'Beef Stroganoff' },
        { name: 'Beef Wellington' },
        { name: 'Beef Stir Fry' },
        { name: 'Beef Burrito' },
        { name: 'Beef Kebabs' },
        { name: 'Beef Tacos' },
        { name: 'Beef Enchiladas' },
        
        // Chicken Dishes
        { name: 'Garlic Chicken' },
        { name: 'Chicken Marsala' },
        { name: 'Chicken Tikka Masala' },
        { name: 'Orange Chicken' },
        { name: 'Chicken Parmesan' },
        { name: 'Chicken Curry' },
        { name: 'Chicken Shawarma' },
        { name: 'Chicken Wings' },
        { name: 'Chicken Piccata' },
        
        // Seafood Dishes
        { name: 'Grilled Salmon' },
        { name: 'Shrimp Scampi' },
        { name: 'Fish Tacos' },
        { name: 'Grilled Tuna' },
        { name: 'Grilled Mahi Mahi' },
        { name: 'Shrimp Stir Fry' },
        { name: 'Calamari' },
        { name: 'Crab Cakes' },
        
        // Pork Dishes
        { name: 'Pork Tenderloin' },
        { name: 'Honey Glazed Ham' },
        { name: 'Pork Chops' },
        
        // Lamb Dishes
        { name: 'Lamb Chops' },
        { name: 'Shepherd\'s Pie' },
        
        // Vegetarian Dishes
        { name: 'Margherita Pizza' },
        { name: 'Vegetable Lasagna' },
        { name: 'Eggplant Parmesan' },
        { name: 'Vegetable Curry' },
        { name: 'Mushroom Risotto' },
        
        // Asian Dishes (not already listed above)
        { name: 'Pad Thai' },
        { name: 'Duck Confit' },
        { name: 'Coq au Vin' },
        { name: 'Beef Bourguignon' },
        { name: 'Ratatouille' },
        { name: 'Moussaka' },
        { name: 'Paella' },
        { name: 'Osso Buco' },
        { name: 'Gnocchi' },
        { name: 'Beef Rendang' },
        { name: 'Thai Green Curry' },
        { name: 'Butter Chicken' },
        { name: 'Tandoori Chicken' },
        { name: 'Bibimbap' },
        { name: 'Korean BBQ' },
        { name: 'Teriyaki Chicken' },
        { name: 'Beef Pho' },
        { name: 'Chicken Katsu' },
        { name: 'Fish and Chips' },
        { name: 'Beef Fajitas' },
        { name: 'Chicken Quesadilla' },
        { name: 'Shrimp Tacos' },
        { name: 'Beef Shawarma' },
        { name: 'Falafel Plate' },
        { name: 'Greek Souvlaki' },
        { name: 'Chicken Schnitzel' }
    ],
    sides: [
        { name: 'French Fries' },
        { name: 'Steamed Rice' },
        { name: 'Roasted Vegetables' },
        { name: 'Mashed Potatoes' },
        { name: 'Mac and Cheese' },
        { name: 'Grilled Asparagus' },
        { name: 'Sweet Potato Fries' },
        { name: 'Quinoa Pilaf' },
        { name: 'Garlic Green Beans' },
        { name: 'Coleslaw' },
        { name: 'Rice Pilaf' },
        { name: 'Roasted Brussels Sprouts' },
        { name: 'Potato Salad' },
        { name: 'Corn on the Cob' },
        { name: 'Sautéed Mushrooms' },
        { name: 'Glazed Carrots' },
        { name: 'Creamed Spinach' },
        { name: 'Scalloped Potatoes' },
        { name: 'Baked Sweet Potato' },
        { name: 'Cauliflower Gratin' }
    ]
};

let currentRotation = 0;
let isSpinning = false;

function triggerConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function showResult(item) {
    const resultContainer = document.getElementById('result');
    resultContainer.classList.add('show');
    resultContainer.innerHTML = `
        <h2>You got: ${item.name}!</h2>
        <a href="recipe.html?recipe=${encodeURIComponent(item.name)}" class="recipe-link">View Recipe</a>
    `;
}

function createWheel(items) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    wheel.innerHTML = '';
    wheel.appendChild(canvas);

    canvas.width = wheel.offsetWidth;
    canvas.height = wheel.offsetHeight;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 5;
    
    const totalSlices = items.length;
    const arc = 2 * Math.PI / totalSlices;
    
    // Store segment boundaries for selection
    const segments = items.map((item, i) => {
        const startAngle = i * (360 / totalSlices);
        const endAngle = (i + 1) * (360 / totalSlices);
        return {
            item: item,
            startAngle: startAngle,
            endAngle: endAngle
        };
    });
    
    // Draw segments
    segments.forEach((segment, i) => {
        const startRad = (segment.startAngle * Math.PI) / 180;
        const endRad = (segment.endAngle * Math.PI) / 180;
        
        // Draw slice
        ctx.beginPath();
        ctx.fillStyle = i % 2 ? '#ff6b6b' : '#ff8e8e';
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startRad, endRad);
        ctx.lineTo(centerX, centerY);
        ctx.fill();
        ctx.stroke();
        
        // Add text
        ctx.save();
        ctx.translate(centerX, centerY);
        const textAngle = startRad + (endRad - startRad) / 2;
        ctx.rotate(textAngle);
        ctx.textAlign = 'right';
        ctx.fillStyle = 'white';
        ctx.font = 'bold 10px Poppins';
        ctx.fillText(segment.item.name, radius - 10, 4);
        ctx.restore();
    });

    // Add center circle
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Store segments for selection
    wheel.segments = segments;
}

// Filter recipes based on dietary preference
function filterRecipes(recipes, dietaryPreference) {
    switch(dietaryPreference) {
        case 'vegetarian':
            return recipes.filter(recipe => {
                const name = recipe.name.toLowerCase();
                return !name.includes('chicken') && 
                       !name.includes('beef') && 
                       !name.includes('fish') &&
                       !name.includes('pork') &&
                       !name.includes('lamb') &&
                       !name.includes('seafood') &&
                       !name.includes('shrimp') &&
                       !name.includes('salmon') &&
                       !name.includes('tuna') &&
                       !name.includes('mahi') &&
                       !name.includes('calamari') &&
                       !name.includes('crab') &&
                       !name.includes('bacon');
            });
        case 'vegan':
            return recipes.filter(recipe => {
                const name = recipe.name.toLowerCase();
                return !name.includes('chicken') && 
                       !name.includes('beef') && 
                       !name.includes('fish') &&
                       !name.includes('pork') &&
                       !name.includes('lamb') &&
                       !name.includes('seafood') &&
                       !name.includes('shrimp') &&
                       !name.includes('salmon') &&
                       !name.includes('tuna') &&
                       !name.includes('mahi') &&
                       !name.includes('calamari') &&
                       !name.includes('crab') &&
                       !name.includes('bacon') &&
                       !name.includes('cheese') &&
                       !name.includes('egg') &&
                       !name.includes('cream');
            });
        case 'kosher':
            return recipes.filter(recipe => {
                const name = recipe.name.toLowerCase();
                return !name.includes('pork') &&
                       !name.includes('shellfish') &&
                       !name.includes('shrimp') &&
                       !name.includes('crab') &&
                       !name.includes('calamari') &&
                       !name.includes('bacon');
            });
        case 'halal':
            return recipes.filter(recipe => {
                const name = recipe.name.toLowerCase();
                return !name.includes('pork') &&
                       !name.includes('bacon') &&
                       !name.includes('ham') &&
                       !name.includes('alcohol') &&
                       !name.includes('wine') &&
                       !name.includes('beer');
            });
        case 'glutenFree':
            return recipes.filter(recipe => {
                const name = recipe.name.toLowerCase();
                return !name.includes('pasta') &&
                       !name.includes('bread') &&
                       !name.includes('pizza') &&
                       !name.includes('lasagna') &&
                       !name.includes('noodles') &&
                       !name.includes('spaghetti') &&
                       !name.includes('penne') &&
                       !name.includes('fettuccine') &&
                       !name.includes('breadcrumbs') &&
                       !name.includes('flour') &&
                       !name.includes('wheat');
            });
        default:
            return recipes;
    }
}

// Get dietary preference from URL
const urlParams = new URLSearchParams(window.location.search);
const dietaryPreference = urlParams.get('diet') || 'none';

// Filter meals based on dietary preference immediately
let filteredMeals = {
    appetizer: filterRecipes(meals.appetizer, dietaryPreference),
    entree: filterRecipes(meals.entree, dietaryPreference),
    sides: filterRecipes(meals.sides, dietaryPreference)
};

// Update the meal type dropdown handler to use filtered meals
mealTypeDropdown.addEventListener('change', function() {
    const selectedType = this.value;
    if (selectedType) {
        createWheel(filteredMeals[selectedType]);
        wheelContainer.classList.add('active');
        resultContainer.classList.remove('show');
    }
});

spinButton.addEventListener('click', () => {
    if (isSpinning || !dropdown.value) return;
    
    const isPremium = checkPremiumStatus();
    const currentSpins = getDailySpins();
    
    if (!isPremium && currentSpins >= DAILY_SPIN_LIMIT) {
        showPremiumModal();
        return;
    }
    
    isSpinning = true;
    if (!isPremium) {
        incrementSpinCount();
    }
    
    const items = meals[dropdown.value];
    const spins = 5;
    const baseSpeed = 3000;
    const extraSpins = Math.random() * 360;
    const totalRotation = (spins * 360) + extraSpins;
    const startTime = performance.now();
    
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / baseSpeed, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentRotation = totalRotation * easeOut;
        
        wheel.style.transform = `rotate(${-currentRotation}deg)`;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            const finalRotation = totalRotation % 360;
            const landingDegree = finalRotation % 360;
            
            // Find the segment that contains the landing degree
            const selectedSegment = wheel.segments.find(segment => {
                const adjustedLanding = (360 - landingDegree) % 360;
                return adjustedLanding >= segment.startAngle && adjustedLanding < segment.endAngle;
            });
            
            console.log('Final rotation:', finalRotation);
            console.log('Landing degree:', landingDegree);
            console.log('Adjusted landing:', (360 - landingDegree) % 360);
            console.log('Selected item:', selectedSegment.item.name);
            
            triggerConfetti();
            showResult(selectedSegment.item);
            isSpinning = false;
        }
    }
    
    requestAnimationFrame(animate);
});

function checkPremiumStatus() {
    return localStorage.getItem(PREMIUM_KEY) === 'true';
}

function getDailySpins() {
    const today = new Date().toDateString();
    const lastSpinDate = localStorage.getItem(LAST_SPIN_DATE);
    
    // Reset spins if it's a new day
    if (lastSpinDate !== today) {
        localStorage.setItem(SPINS_KEY, '0');
        localStorage.setItem(LAST_SPIN_DATE, today);
    }
    
    return parseInt(localStorage.getItem(SPINS_KEY) || '0');
}

function incrementSpinCount() {
    const currentSpins = getDailySpins();
    localStorage.setItem(SPINS_KEY, (currentSpins + 1).toString());
}

function showPremiumModal() {
    const modal = document.createElement('div');
    modal.className = 'premium-modal';
    modal.innerHTML = `
        <div class="premium-content">
            <h2>Upgrade to Premium!</h2>
            <p>You've reached your daily spin limit. Upgrade to premium to:</p>
            <ul>
                <li>Get unlimited spins</li>
                <li>Remove all ads</li>
                <li>Support the developer</li>
            </ul>
            <button class="premium-button">Upgrade for $4.99</button>
            <button class="close-modal">Maybe Later</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Add event listeners for the buttons
    modal.querySelector('.premium-button').addEventListener('click', () => {
        // Add your payment processing logic here
        localStorage.setItem(PREMIUM_KEY, 'true');
        modal.remove();
    });
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
} 