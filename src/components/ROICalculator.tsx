import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const pct = (value: number, min: number, max: number) => `${((value - min) / (max - min)) * 100}%`;

const ROICalculator: React.FC = () => {
    const [numVets, setNumVets] = useState(3);
    const [revPerVet, setRevPerVet] = useState(650000);
    const [efficiencyGain, setEfficiencyGain] = useState(15);
    const [dailyAppts, setDailyAppts] = useState(15);

    const totalRevenue = numVets * revPerVet;
    const additionalRevenue = totalRevenue * (efficiencyGain / 100);
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

        // Easter eggs
        if (numVets === 20) {
            setEggMessage("Building a veterinary empire, are we? 🏰");
        } else if (efficiencyGain === 40) {
            setEggMessage("Whoa there, Elon Musk! 🚀 That's efficient!");
        } else if (dailyAppts === 30) {
            setEggMessage("Do your vets run on nuclear fusion? ⚛️");
        } else {
            setEggMessage(null);
        }

        // Confetti for big wins
        if (valuationIncrease > 1000000 && !confettiTriggered) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            setConfettiTriggered(true);
        } else if (valuationIncrease < 1000000) {
            setConfettiTriggered(false);
        }

    }, [numVets, efficiencyGain, dailyAppts, valuationIncrease, confettiTriggered, interactionStart]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16 reveal">
                <h6 className="text-brand-secondary font-black tracking-[0.25em] uppercase text-xs mb-5 flex items-center justify-center gap-3">
                    <span className="w-8 h-px bg-brand-secondary"></span>
                    The Numbers
                    <span className="w-8 h-px bg-brand-secondary"></span>
                </h6>
                <h2 className="text-4xl md:text-6xl font-semibold text-brand-primary mb-6 font-display">
                    Calculate your <em className="text-brand-secondary font-light">ROI</em>
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                    See the potential financial impact of optimizing your veterinary practice with our consulting services.
                </p>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-brand-primary/10 overflow-hidden border border-brand-secondary/10 reveal stagger-1">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Inputs Section */}
                    <div className="lg:col-span-7 p-8 md:p-12 bg-white flex flex-col justify-center">
                        <div className="mb-10">
                            <h3 className="text-2xl font-semibold text-brand-primary flex items-center mb-2 font-display">
                                <span className="w-9 h-9 rounded-xl bg-brand-secondary/15 text-brand-secondary flex items-center justify-center text-sm mr-3 font-black font-sans">1</span>
                                Practice Metrics
                            </h3>
                            <p className="text-slate-500 ml-12 text-sm">Adjust the sliders to match your current practice data.</p>
                        </div>

                        <div className="space-y-10">
                            {/* Number of Vets Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Number of DVMs</label>
                                    <span className="text-3xl font-black text-brand-primary font-display tabular-nums">{numVets}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="20"
                                    step="1"
                                    value={numVets}
                                    onChange={(e) => { setNumVets(Number(e.target.value)); handleInteraction(); }}
                                    className="vb-slider"
                                    style={{ '--fill': pct(numVets, 1, 20) } as React.CSSProperties}
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                                    <span>1 DVM</span>
                                    <span>20 DVMs</span>
                                </div>
                            </div>

                            {/* Average Revenue Input */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Avg. Revenue per DVM</label>
                                    <span className="text-2xl font-black text-brand-primary font-display tabular-nums">{formatCurrency(revPerVet)}</span>
                                </div>
                                <div className="relative group">
                                    <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg group-focus-within:text-brand-secondary transition-colors">$</span>
                                    <input
                                        type="number"
                                        min="200000"
                                        max="2000000"
                                        step="10000"
                                        value={revPerVet}
                                        onChange={(e) => { setRevPerVet(Number(e.target.value)); handleInteraction(); }}
                                        className="w-full pl-10 pr-4 py-4 bg-lilac-mist/70 border-2 border-brand-secondary/10 rounded-2xl focus:outline-none focus:border-brand-secondary transition-all text-brand-primary font-bold text-lg"
                                    />
                                </div>
                                <p className="text-xs text-slate-400 mt-2 font-medium">Industry average: ~$600k - $800k</p>
                            </div>

                            {/* Efficiency Gain Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Projected Efficiency Gain</label>
                                    <span className="text-3xl font-black text-emerald-600 font-display tabular-nums">{efficiencyGain}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="5"
                                    max="40"
                                    step="1"
                                    value={efficiencyGain}
                                    onChange={(e) => { setEfficiencyGain(Number(e.target.value)); handleInteraction(); }}
                                    className="vb-slider vb-slider-emerald"
                                    style={{ '--fill': pct(efficiencyGain, 5, 40) } as React.CSSProperties}
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                                    <span>Conservative (5%)</span>
                                    <span>Aggressive (40%)</span>
                                </div>
                                <p className="text-sm text-slate-500 mt-3 italic bg-lilac-mist/70 p-3 rounded-xl border border-brand-secondary/10">
                                    "Our clients typically see <span className="font-bold text-brand-primary">15-25% growth</span> in the first year."
                                </p>
                            </div>

                            {/* Daily Appointments Slider */}
                            <div>
                                <div className="flex justify-between items-end mb-4">
                                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Avg. Appts Per DVM / Day</label>
                                    <span className="text-3xl font-black text-brand-primary font-display tabular-nums">{dailyAppts}</span>
                                </div>
                                <input
                                    type="range"
                                    min="8"
                                    max="30"
                                    step="1"
                                    value={dailyAppts}
                                    onChange={(e) => { setDailyAppts(Number(e.target.value)); handleInteraction(); }}
                                    className="vb-slider"
                                    style={{ '--fill': pct(dailyAppts, 8, 30) } as React.CSSProperties}
                                />
                                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                                    <span>8 Appts</span>
                                    <span>30 Appts</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="lg:col-span-5 bg-brand-primary text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden grain">
                        {/* Background Effect */}
                        <div className="aurora-blob w-80 h-80 bg-brand-secondary/60 top-0 right-0 translate-x-1/3 -translate-y-1/3"></div>
                        <div className="aurora-blob w-80 h-80 bg-brand-accent/30 bottom-0 left-0 -translate-x-1/3 translate-y-1/3" style={{ animationDelay: '-9s' }}></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center font-display">
                                <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mr-3 text-sm font-black font-sans">2</span>
                                Projected Returns
                            </h3>

                            <div className="space-y-5">
                                {eggMessage && (
                                    <div className="glass p-3 rounded-xl text-center">
                                        <p className="text-brand-gold font-bold text-sm">✨ {eggMessage}</p>
                                    </div>
                                )}
                                <div className="p-6 rounded-2xl glass shadow-lg transform transition-all hover:scale-[1.02] duration-300">
                                    <p className="text-brand-mint text-xs font-bold uppercase tracking-widest mb-2">Annual Revenue Increase</p>
                                    <p className="text-4xl md:text-5xl font-black text-white tracking-tight font-display tabular-nums">
                                        +{formatCurrency(additionalRevenue)}
                                    </p>
                                    <div className="mt-2 text-xs text-brand-mint/60 font-medium">Based on {efficiencyGain}% efficiency gain</div>
                                </div>

                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-lg transform transition-all hover:scale-[1.02] duration-300">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-brand-mint text-xs font-bold uppercase tracking-widest mb-1">Practice Value Boost</p>
                                            <p className="text-3xl font-black text-emerald-400 tracking-tight pt-1 font-display tabular-nums">
                                                +{formatCurrency(valuationIncrease)}
                                            </p>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <span className="text-xs text-brand-mint/60 font-medium block">Est. Enterprise Value</span>
                                            <span className="text-[10px] text-brand-mint/40 block">Based on 4.5x multiple</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:hidden text-xs text-brand-mint/60 font-medium">Est. Enterprise Value (4.5x multiple)</div>
                                </div>

                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-lg transform transition-all hover:scale-[1.02] duration-300">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-brand-mint text-xs font-bold uppercase tracking-widest mb-1">Annual Capacity Gain</p>
                                            <p className="text-3xl font-black text-white tracking-tight pt-1 font-display tabular-nums">
                                                +{new Intl.NumberFormat('en-US').format(additionalAppts)}
                                            </p>
                                        </div>
                                        <div className="text-right hidden sm:block">
                                            <span className="text-xs text-brand-mint/60 font-medium block">Additional Appts / Year</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:hidden text-xs text-brand-mint/60 font-medium">Additional Appointments / Year</div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        className="shine-effect w-full py-4 bg-brand-accent text-brand-primary rounded-2xl font-black text-lg hover:bg-white hover:shadow-xl transition-all shadow-lg active:scale-95 group flex items-center justify-center"
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Start Growing Now
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
