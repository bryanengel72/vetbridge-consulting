import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const ROICalculator: React.FC = () => {
    const [numVets, setNumVets] = useState(3);
    const [revPerVet, setRevPerVet] = useState(650000);
    const [efficiencyGain, setEfficiencyGain] = useState(15);
    const [dailyAppts, setDailyAppts] = useState(15);

    const totalRevenue = numVets * revPerVet;
    const additionalRevenue = totalRevenue * (efficiencyGain / 100);
    const threeYearGrowth = additionalRevenue * 3; // 3-Year Growth Potential
    const valuationIncrease = additionalRevenue * 4.5; // Estimated 4.5x multiple on operational efficiency revenue
    const additionalAppts = Math.round((numVets * dailyAppts * 5 * 50) * (efficiencyGain / 100));

    // Humor State
    const [confettiTriggered, setConfettiTriggered] = useState(false);
    const [eggMessage, setEggMessage] = useState<string | null>(null);
    const [interactionStart, setInteractionStart] = useState(false);

    const handleInteraction = () => {
        if (!interactionStart) setInteractionStart(true);
    };

    useEffect(() => {
        if (!interactionStart) return;

        // Option 1: Easter Eggs
        if (numVets === 20) {
            setEggMessage("Building a veterinary empire, are we? 🏰");
        } else if (efficiencyGain === 40) {
            setEggMessage("Whoa there, Elon Musk! 🚀 That's efficient!");
        } else if (dailyAppts === 30) {
            setEggMessage("Do your vets run on nuclear fusion? ⚛️");
        } else {
            setEggMessage(null);
        }

        // Option 3: Confetti for big wins
        if (valuationIncrease > 1000000 && !confettiTriggered) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            setConfettiTriggered(true);
        } else if (valuationIncrease < 1000000) {
            setConfettiTriggered(false); // Reset if they drop back down
        }

    }, [numVets, efficiencyGain, dailyAppts, valuationIncrease, confettiTriggered]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    Calculate Your <span className="text-brand-primary">ROI</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    See the potential financial impact of optimizing your veterinary practice with our consulting services.
                </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 reveal delay-100">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Inputs Section */}
                    <div className="lg:col-span-7 p-8 md:p-12 bg-white flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-2">
                                <span className="w-8 h-8 rounded-full bg-brand-secondary/20 text-brand-primary flex items-center justify-center text-sm mr-3 font-bold">1</span>
                                Practice Metrics
                            </h3>
                            <p className="text-gray-500 ml-11 text-sm">Adjust the sliders to match your current practice data.</p>
                        </div>


                        <div className="space-y-10">
                            {/* Number of Vets Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Number of DVMs</label>
                                    <span className="text-3xl font-bold text-brand-primary">{numVets}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    step="1"
                                    value={numVets}
                                    onChange={(e) => { setNumVets(Number(e.target.value)); handleInteraction(); }}
                                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary hover:accent-brand-primary transition-all"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                    <span>1 DVM</span>
                                    <span>20 DVMs</span>
                                </div>
                            </div>

                            {/* Average Revenue Input */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Avg. Revenue per DVM</label>
                                    <span className="text-2xl font-bold text-gray-900">{formatCurrency(revPerVet)}</span>
                                </div>
                                <div className="relative group">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg group-focus-within:text-brand-primary transition-colors">$</span>
                                    <input
                                        type="number"
                                        min="200000"
                                        max="2000000"
                                        step="10000"
                                        value={revPerVet}
                                        onChange={(e) => { setRevPerVet(Number(e.target.value)); handleInteraction(); }}
                                        className="w-full pl-9 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all text-gray-800 font-bold text-lg shadow-inner"
                                    />
                                </div>
                                <p className="text-xs text-gray-400 mt-2 font-medium">Industry average: ~$600k - $800k</p>
                            </div>

                            {/* Efficiency Gain Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Projected Efficiency Gain</label>
                                    <span className="text-3xl font-bold text-green-600">{efficiencyGain}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="40"
                                    step="1"
                                    value={efficiencyGain}
                                    onChange={(e) => { setEfficiencyGain(Number(e.target.value)); handleInteraction(); }}
                                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600 hover:accent-green-700 transition-all"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                    <span>Conservative (5%)</span>
                                    <span>Aggressive (40%)</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-3 italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    "Our clients typically see <span className="font-bold text-gray-700">15-25% growth</span> in the first year."
                                </p>
                            </div>

                            {/* Daily Appointments Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Avg. Appts Per DVM / Day</label>
                                    <span className="text-3xl font-bold text-brand-primary">{dailyAppts}</span>
                                </div>
                                <input
                                    type="range"
                                    min="8"
                                    max="30"
                                    step="1"
                                    value={dailyAppts}
                                    onChange={(e) => { setDailyAppts(Number(e.target.value)); handleInteraction(); }}
                                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-secondary hover:accent-brand-primary transition-all"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                                    <span>8 Appts</span>
                                    <span>30 Appts</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="lg:col-span-5 bg-brand-primary text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                        {/* Background Effect */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-30 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-blue-100 mb-8 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                                Projected Returns
                            </h3>

                            <div className="space-y-6">
                                {eggMessage && (
                                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-lg text-center animate-in fade-in slide-in-from-top-2">
                                        <p className="text-yellow-300 font-bold text-sm">✨ {eggMessage}</p>
                                    </div>
                                )}
                                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg transform transition-all hover:scale-[1.02] duration-300">
                                    <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Annual Revenue Increase</p>
                                    <p className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
                                        +{formatCurrency(additionalRevenue)}
                                    </p>
                                    <div className="mt-2 text-xs text-blue-200/60 font-medium">Based on {efficiencyGain}% efficiency gain</div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 shadow-lg transform transition-all hover:scale-[1.02] duration-300">
                                        <div className="flex justify-between items-center bg-transparent">
                                            <div>
                                                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Practice Value Boost</p>
                                                <p className="text-3xl font-bold text-green-400 drop-shadow-sm tracking-tight pt-1">
                                                    +{formatCurrency(valuationIncrease)}
                                                </p>
                                            </div>
                                            <div className="text-right hidden sm:block">
                                                <span className="text-xs text-blue-200/60 font-medium block">Est. Enterprise Value</span>
                                                <span className="text-[10px] text-blue-200/40 block">Based on 4.5x multiple</span>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:hidden text-xs text-blue-200/60 font-medium">Est. Enterprise Value (4.5x multiple)</div>
                                    </div>

                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/5 shadow-lg transform transition-all hover:scale-[1.02] duration-300">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Annual Capacity Gain</p>
                                                <p className="text-3xl font-bold text-white drop-shadow-sm tracking-tight pt-1">
                                                    +{new Intl.NumberFormat('en-US').format(additionalAppts)}
                                                </p>
                                            </div>
                                            <div className="text-right hidden sm:block">
                                                <span className="text-xs text-blue-200/60 font-medium block">Additional Appts / Year</span>
                                            </div>
                                        </div>
                                        <div className="mt-2 sm:hidden text-xs text-blue-200/60 font-medium">Additional Appointments / Year</div>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button
                                        className="w-full py-4 bg-white text-brand-primary rounded-xl font-bold text-lg hover:bg-gray-100 hover:shadow-xl transition-all shadow-lg active:scale-95 group flex items-center justify-center"
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Start Growing Now
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <p className="text-center text-xs text-white/40 mt-3">Estimates are for illustrative purposes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ROICalculator;
