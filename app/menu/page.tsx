"use client";

const shakes = [
  "Strawberry Shortcake", "PB Brownie Batter Cheesecake", "Xs & Os", "Green Monster", 
  "Cookies N Cream", "Peanut Butter Cup", "Blueberry Muffin", "The Elvis", 
  "Salted Caramel", "Banana Nutbread"
];

const teas = [
  "Captain America", "Dragonfruit", "Strawberry Açaí", "Colorado Sunrise", 
  "Cucumber Lime", "Mexican Lollipop", "Arnold Palmer", "Peach Passion", 
  "Black Pearl", "Cucumber Watermelon"
];

const fallShakes = [
  "Apple Pie", "Pumpkin Spice Cheesecake", "Pumpkin Mocha", 
  "Pumpkin Praline", "Oatmeal Cookie", "Iced Carrot Cake"
];

const fallTeas = [
  { name: "Apple Candy", description: "(Pom, Cherry & Green Apple)" },
  { name: "Cran Pom", description: "" },
  { name: "Cherry Blackberry Mojito", description: "" },
  { name: "Pineapple Cider", description: "" },
  { name: "Sour Patch", description: "(Raspberry & Grape)" },
  { name: "Hocus Pocus", description: "(Grape & Orange)" },
  { name: "Tropical Twist Detox", description: "Non-caffeinated" },
  { name: "Strawberry Açaí CR7", description: "Non-caffeinated" },
  { name: "Mango Fuel Me Up", description: "Non-caffeinated" }
];

const acaiBowls = [
  { name: "The OG", calories: "310", description: "Triple Berry Madness" },
  { name: "Chunky Monkey", calories: "395", description: "Chocolate PB Banana" },
  { name: "The Aztec", calories: "325", description: "Mango Dragonfruit" }
];

const waffleFlavors = [
  "Banana Caramel", "Blueberry Vanilla", "Red Velvet Strawberry", "PB Chocolate Crunch"
];

const shakeBoosters = [
  { name: "Fat Burner", price: "$6" },
  { name: "Collagen", price: "$4" },
  { name: "Probiotics", price: "$3" },
  { name: "Active Fiber", price: "$3" },
  { name: "Niteworks", price: "$6" },
  { name: "Immunity", price: "$3.50" }
];

const teaBoosters = [
  { name: "Immunity", price: "$3.50" },
  { name: "BCAAs", price: "$3.50" },
  { name: "Nitric Oxide", price: "$6" },
  { name: "Protein", price: "$4" },
  { name: "Collagen", price: "$4" },
  { name: "Xtra Energy & Focus", price: "$2.50" },
  { name: "Fat Release", price: "$3" },
  { name: "CR7 Hydration Shot", price: "$3.50" }
];

export default function MenuPage() {
  return (
    <main id="main-content" className="menu-page-bg">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container-max mx-auto px-6 text-center">
          <h1 className="font-lemon gradient-brand text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Fresh protein shakes, energizing mega teas, nutritious açaí bowls, and healthy treats 
            crafted with the finest ingredients to fuel your day.
          </p>
        </div>
      </section>

      <div className="w-full border-t-2 border-gray-300"></div>

      <div className="container-max mx-auto px-6 pb-0 pt-16">
        {/* Top 10 Shakes */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-lemon gradient-brand text-3xl md:text-4xl font-bold mb-4">
              Top 10 Protein Shakes
            </h2>
            <div className="pricing-badge">
              <span className="text-lg font-semibold">$10 Regular • $12 Large • $14 Giant</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {shakes.map((shake, index) => (
              <div key={index} className="menu-card relative">
                {(shake === "Green Monster" || shake === "PB Brownie Batter Cheesecake") && (
                  <div className="popular-badge">
                    <span className="text-xs font-bold">⭐ POPULAR</span>
                  </div>
                )}
                <h3 className="font-semibold text-gray-800 text-lg">{shake}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => document.getElementById('shake-boosters')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-green-outline inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
            >
              View Shake Boosters
            </button>
          </div>
        </section>

        <div className="menu-divider"></div>

        {/* Top 10 Mega Teas */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-lemon gradient-brand text-3xl md:text-4xl font-bold mb-4">
              Top 10 Mega Teas
            </h2>
            <div className="pricing-badge">
              <span className="text-lg font-semibold">$10 Regular</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {teas.map((tea, index) => (
              <div key={index} className="menu-card relative">
                {(tea === "Captain America" || tea === "Colorado Sunrise" || tea === "Cucumber Watermelon") && (
                  <div className="popular-badge">
                    <span className="text-xs font-bold">⭐ POPULAR</span>
                  </div>
                )}
                <h3 className="font-semibold text-gray-800 text-lg">{tea}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => document.getElementById('tea-boosters')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-green-outline inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
            >
              View Tea Boosters
            </button>
          </div>
        </section>

        <div className="menu-divider"></div>

        {/* Fall Shakes */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-lemon gradient-brand text-3xl md:text-4xl font-bold mb-4">
              Fall Protein Shakes
            </h2>
            <p className="text-gray-600 mb-4">Low carb, low sugar</p>
            <div className="pricing-badge">
              <span className="text-lg font-semibold">$10 Regular • $12 Large • $14 Giant</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {fallShakes.map((shake, index) => (
              <div key={index} className="menu-card relative">
                {(shake === "Apple Pie" || shake === "Oatmeal Cookie") && (
                  <div className="popular-badge">
                    <span className="text-xs font-bold">⭐ POPULAR</span>
                  </div>
                )}
                <h3 className="font-semibold text-gray-800 text-lg">{shake}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => document.getElementById('shake-boosters')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-green-outline inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
            >
              View Shake Boosters
            </button>
          </div>
        </section>

        <div className="menu-divider"></div>

        {/* Fall Seasonal Teas */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-lemon gradient-brand text-3xl md:text-4xl font-bold mb-4">
              Fall Seasonal Teas
            </h2>
            <p className="text-gray-600 mb-4">Ginseng, B vitamins + collagen</p>
            <div className="pricing-badge">
              <span className="text-lg font-semibold">$10 One Size</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fallTeas.map((tea, index) => (
              <div key={index} className="menu-card menu-card-vertical relative">
                {tea.name === "Sour Patch" && (
                  <div className="popular-badge">
                    <span className="text-xs font-bold">⭐ POPULAR</span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="font-semibold text-gray-800 text-lg">{tea.name}</h3>
                  {tea.description && (
                    <p className="text-gray-600 text-sm mt-2">{tea.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => document.getElementById('tea-boosters')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-green-outline inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
            >
              View Tea Boosters
            </button>
          </div>
        </section>

        <div className="menu-divider"></div>

        {/* Açaí Bowls */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-lemon gradient-brand text-3xl md:text-4xl font-bold mb-4">
              Açaí Bowls
            </h2>
            <p className="text-gray-600 mb-2">24g protein • 300-400 calories • 21 vitamins & minerals</p>
            <div className="pricing-badge">
              <span className="text-lg font-semibold">$15 Each</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {acaiBowls.map((bowl, index) => (
              <div key={index} className="menu-card-large relative">
                {bowl.name === "The OG" && (
                  <div className="popular-badge">
                    <span className="text-xs font-bold">⭐ POPULAR</span>
                  </div>
                )}
                <h3 className="font-bold text-xl text-gray-800 mb-2">{bowl.name}</h3>
                <p className="text-gray-600 mb-2">{bowl.description}</p>
                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {bowl.calories} calories
                </span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button 
              onClick={() => document.getElementById('combo-deal')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-combo inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-red-200"
            >
              🎉 Make it a Combo & Save $2!
            </button>
          </div>
        </section>

        <div className="menu-divider"></div>

        {/* Protein Waffles */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-lemon gradient-brand text-3xl md:text-4xl font-bold mb-4">
              Protein Waffles
            </h2>
            <p className="text-gray-600 mb-4">35g protein • All toppings included</p>
            <div className="pricing-badge">
              <span className="text-lg font-semibold">2 Waffle Order - $18</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {waffleFlavors.map((flavor, index) => (
              <div key={index} className="menu-card relative">
                {flavor === "Blueberry Vanilla" && (
                  <div className="popular-badge">
                    <span className="text-xs font-bold">⭐ POPULAR</span>
                  </div>
                )}
                <h3 className="font-semibold text-gray-800 text-lg">{flavor}</h3>
              </div>
            ))}
          </div>
        </section>

        <div className="menu-divider"></div>

        {/* Protein Balls */}
        <section className="mb-16">
          <div className="flex justify-center">
            <div className="menu-card-large max-w-md">
              <h2 className="font-lemon gradient-brand text-3xl md:text-4xl font-bold mb-4 text-center">
                Protein Balls
              </h2>
              <div className="text-center mb-6">
                <div className="pricing-badge">
                  <span className="text-lg font-semibold">$4 for 3 balls</span>
                </div>
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">Fresh Made Daily</h3>
              <p className="text-gray-600 mb-4 text-center">Delicious protein-packed energy balls made with premium ingredients</p>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg py-3 px-2 border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">12g</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Protein</div>
                  </div>
                  <div className="bg-white rounded-lg py-3 px-2 border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">116</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Calories</div>
                  </div>
                  <div className="bg-white rounded-lg py-3 px-2 border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">10.5g</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Carbs</div>
                  </div>
                  <div className="bg-white rounded-lg py-3 px-2 border border-green-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">5g</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wide">Fat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="menu-divider"></div>

        {/* Boosters Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0 pb-20">
          {/* Shake Boosters */}
          <section id="shake-boosters">
            <h2 className="font-lemon gradient-brand text-2xl md:text-3xl font-bold mb-6 text-center">
              Shake Boosters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {shakeBoosters.map((booster, index) => (
                <div key={index} className="booster-card">
                  <span className="font-semibold text-gray-800">{booster.name}</span>
                  <span className="font-bold text-green-600">{booster.price}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tea Boosters */}
          <section id="tea-boosters">
            <h2 className="font-lemon gradient-brand text-2xl md:text-3xl font-bold mb-6 text-center">
              Tea Boosters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {teaBoosters.map((booster, index) => (
                <div key={index} className="booster-card">
                  <span className="font-semibold text-gray-800">{booster.name}</span>
                  <span className="font-bold text-green-600">{booster.price}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}


