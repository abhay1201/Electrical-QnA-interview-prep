// ─── Electrical Engineering Q&A Database ────────────────────────────────────
// Ported from the C++ terminal app to a JS module for use in React

export const qaDatabase = [
  // ── POWER FACTOR ───────────────────────────────────────────────────────────
  {
    topic: "Power Factor",
    question: "What is Active, Reactive, Apparent & Complex Power?",
    answer:
      "Think of pushing a heavy box. Not all your effort actually moves the box forward! Active Power (P): The REAL work done. What your electricity meter measures. Unit: Watts (W). Reactive Power (Q): Energy that bounces back and forth like a rubber band. It does NO useful work but is needed by motors and coils. Unit: VAR. Apparent Power (S): Total power supplied. Unit: VA or kVA. Complex Power (S): Vector sum of active and reactive power. S = P + jQ.",
    formula:
      "S = V × I (Apparent)\nP = V × I × cos(φ)  [Active, Watts]\nQ = V × I × sin(φ)  [Reactive, VAR]\n|S|² = P² + Q²",
    tip: "Beer analogy: Beer in glass = Active Power (useful work). Foam = Reactive Power (wasted). Full glass = Apparent Power.",
    example: "",
  },
  {
    topic: "Power Factor",
    question: "What is Leading & Lagging Power Factor and how to improve it?",
    answer:
      "Power Factor (PF) = cos(φ), where φ is the angle between Voltage and Current. Lagging PF: Current lags behind voltage. Caused by inductive loads (motors, transformers). Most common in industry. Leading PF: Current leads voltage. Caused by capacitive loads. Methods to improve PF: (1) Static Capacitor - provides leading current to cancel lagging current. (2) Synchronous Condenser - over-excited synchronous motor with no load, acts like capacitor. (3) Phase Advancer - improves PF from the rotor circuit of induction motors.",
    formula:
      "PF = P / S = cos(φ)\nPF ranges from 0 to 1. Unity PF (1.0) is ideal.\nRequired Qc = P × (tan(φ1) - tan(φ2))\nC = Qc / (V² × 2 × π × f)",
    tip: "Low PF = lots of foam (reactive) with little beer (real power). Capacitors remove the foam!",
    example:
      "System A: PF=0.5, needs 200A. System B: PF=1.0, needs 100A for same 100kW load!",
  },
  {
    topic: "Power Factor",
    question: "Why do we improve the Power Factor?",
    answer:
      "Low power factor causes: (1) Large Line Losses - Low PF draws high current, causing I²×R losses in cables. (2) Large kVA Equipment - PF inversely proportional to kVA, needs bigger transformers. (3) Large Conductor Size - High current needs thicker, costlier cables. (4) Poor Voltage Regulation - High current causes large voltage drop. (5) Low Efficiency - Maximum efficiency achieved at PF = 1.",
    formula:
      "I = P / (V × PF)\nLow PF → High I → High I²R losses\nEfficiency is maximum when PF = 1",
    tip: "Think of it like a leaky pipe. Low PF = big pipe (conductor) to deliver same water (power).",
    example: "100kW at PF=0.5 needs twice the wire as 100kW at PF=1.0",
  },
  {
    topic: "Power Factor",
    question: "What is a Linear & Non-Linear Circuit?",
    answer:
      "Linear Circuit: Relationship between Voltage and Current follows Ohm's Law (V=IR). The V-I graph is a straight line. Examples: Resistor, Inductor, Capacitor. Non-Linear Circuit: V and I do NOT have a proportional relationship. The graph is curved. Examples: Diode, Transistor, SCR. Limitations of Ohm's Law: Not valid for non-linear elements. Resistance must be constant (it changes with temperature). Diode V-I curve is exponential, not linear.",
    formula:
      "Linear:     V = I × R  (straight line graph)\nNon-linear: I = Is×(e^(V/Vt) - 1)  (diode equation)\nOhm's Law:  V = IR (valid only for linear, constant R)",
    tip: "Linear = straight road. Non-linear = winding mountain road. Same input, different output!",
    example:
      "Doubling voltage in a linear circuit doubles current. NOT true for a diode!",
  },

  // ── DC GENERATOR ───────────────────────────────────────────────────────────
  {
    topic: "DC Generator",
    question: "What are the types of DC Generator?",
    answer:
      "DC Generators are classified as: (1) Separately Excited: Field winding powered by external DC source. (2) Self-Excited - field powered by its own output: Shunt Generator: Field winding in PARALLEL with armature. Series Generator: Field winding in SERIES with armature. Compound Generator: Both shunt AND series field windings. Types: Long Shunt Compound, Short Shunt Compound. Direction of induced voltage: Fleming's Right-Hand Rule. Thumb=Motion, Index=Magnetic Field, Middle=Induced EMF.",
    formula:
      "Eg = (P × φ × Z × N) / (60 × A)\nP = poles, φ = flux/pole, Z = conductors\nN = speed in rpm, A = parallel paths",
    tip: "Self-excited = car that starts itself. Separately excited = car that needs a push start!",
    example: "",
  },
  {
    topic: "DC Generator",
    question: "What is Lap Winding vs Wave Winding?",
    answer:
      "Lap Winding: Number of parallel paths = Number of poles (P). Each path has Z/P conductors in series. Total armature current = P × current per path. Used in large machines - low voltage, high current. Wave Winding: Always exactly 2 parallel paths regardless of number of poles. Each path has Z/2 conductors in series. Used in small machines - high voltage, low current.",
    formula:
      "Lap:  Parallel paths A = P\nWave: Parallel paths A = 2\nEMF: Eg = (P×φ×Z×N) / (60×A)\nLap current: Ia = P × (current per path)",
    tip: "LAP = Large current (many paths in parallel). WAVE = high Voltage (long series paths).",
    example: "4-pole motor: Lap has 4 paths, Wave has only 2 paths.",
  },
  {
    topic: "DC Generator",
    question: "What are all the losses in a DC Generator?",
    answer:
      "Three categories of losses: (1) COPPER LOSSES (I²R): Armature copper loss = Ia²×Ra. Shunt field copper loss = Ish²×Rsh. Series field copper loss. (2) IRON/CORE LOSSES: Hysteresis Loss - due to continuous magnetization/demagnetization of the core. Eddy Current Loss - circulating currents in core due to changing flux. Reduced by laminations. (3) MECHANICAL LOSSES: Friction (bearings, brushes) and Windage (air resistance).",
    formula:
      "Hysteresis: Ph = η × Bmax^1.6 × f × V  (watts)\nEddy Current: Pe = Ke × Bmax² × f² × t² × V  (watts)\nEfficiency: η = Output / (Output + All Losses)\nη = (V×IL) / (V×IL + Cu loss + Iron loss + Mech loss)",
    tip: "Hysteresis = rubbing a magnet back and forth causes heat. Eddy = whirlpool currents in iron.",
    example: "Laminated core reduces eddy current losses by up to 90%!",
  },
  {
    topic: "DC Generator",
    question: "What is Eddy Current Loss and Hysteresis Loss?",
    answer:
      "Eddy Current Loss (Foucault Loss): When a conductor is placed in a varying magnetic field, circulating (eddy) currents are induced within the conductor itself. These currents produce heat (I²R loss). Reduced by using thin laminated sheets insulated from each other. Hysteresis Loss: As AC flows, the core is magnetized and demagnetized every half cycle. Energy is spent in reversing the molecular magnets in the core. This energy appears as heat. Reduced by using silicon steel (low hysteresis coefficient).",
    formula:
      "Pe = Ke × Bmax² × f² × t² × V  (eddy current)\nPh = Kh × Bmax^1.6 × f × V  (hysteresis)\nt = lamination thickness\nKe, Kh = material constants",
    tip: "Eddy current = tiny whirlpools of current inside the iron core creating heat waste.",
    example:
      "Silicon steel has 4% Si content, reducing hysteresis loss by ~50% vs plain iron.",
  },

  // ── DC MOTOR ───────────────────────────────────────────────────────────────
  {
    topic: "DC Motor",
    question: "What is Back EMF in a DC Motor?",
    answer:
      "When a DC motor's armature rotates, the conductors cut through the magnetic field and generate their own EMF. This is called Back EMF (Eb) or Counter EMF. It opposes the applied voltage (Lenz's Law). At start: No rotation → Eb = 0 → Very high starting current (dangerous!). At full speed: Eb is close to V, so current is small (normal running). Back EMF acts as an automatic self-regulating mechanism for the motor.",
    formula:
      "V = Eb + Ia × Ra\nTherefore: Ia = (V - Eb) / Ra\nAt start:  Eb=0, Ia = V/Ra  (very high!)\nAt speed:  Eb~V, Ia is small (normal)\nEb = (P×φ×Z×N) / (60×A)",
    tip: "Back EMF is like a speed governor! More load → slower speed → less Eb → more torque. Auto-adjust!",
    example:
      "220V motor, Ra=0.5Ω: At start Ia=440A! At full speed with Eb=200V: Ia=(220-200)/0.5=40A",
  },
  {
    topic: "DC Motor",
    question:
      "Condition for Maximum Power and why not used practically?",
    answer:
      "A DC motor develops maximum mechanical power under a specific condition. However, this condition is never used in practice because: (1) At maximum power condition, armature current is extremely high - far above rated current. This would overheat and burn out the motor. (2) Exactly 50% of the input power is wasted as heat in the armature resistance. So maximum power = maximum waste = not practical!",
    formula:
      "Power developed = Eb × Ia\nMax power when: Eb = V/2\nAt this point: Ia = V/(2×Ra) -- very high!\n50% of power lost in Ra at this condition",
    tip: "Like running a car at full throttle constantly - yes, maximum power, but you destroy the engine!",
    example:
      "220V motor, Ra=0.5Ω: Eb=110V, Ia=110/0.5=220A (rated might be only 20A!)",
  },
  {
    topic: "DC Motor",
    question: "Characteristics of DC Shunt Motor",
    answer:
      "In a shunt motor, field winding is in parallel with armature. Field voltage = supply voltage. So field current and flux φ are approximately CONSTANT. TORQUE-CURRENT (Ta-Ia) Characteristic: Since Ta ∝ φ×Ia, and φ is constant: Ta is directly proportional to Ia. Straight line through origin. Heavy starting current needed for heavy load - cannot start with heavy load! SPEED-CURRENT (N-Ia) Characteristic: Speed stays nearly constant as load changes. Slight drop due to armature reaction and resistance drop. CONCLUSION: Low starting torque. Cannot start with heavy load. Speed almost constant. Used where constant speed is needed (lathes, fans).",
    formula:
      "Ta = K × φ × Ia\nSince φ = constant:\nTa ∝ Ia  (linear)\nN = K × (V - Ia×Ra) / φ ≈ constant\nSpeed regulation = (No-load N - Full-load N) / Full-load N",
    tip: "Shunt motor = ceiling fan motor. Speed stays nearly same whether heavy or light load.",
    example: "Shunt motor speed varies only 5-10% from no-load to full-load.",
  },
  {
    topic: "DC Motor",
    question: "Characteristics of DC Series Motor",
    answer:
      "In a series motor, field winding is in series. Field current = Armature current (Ia = Ise). So flux φ is proportional to Ia (before magnetic saturation). TORQUE-CURRENT: Ta ∝ φ×Ia ∝ Ia² (before saturation). After saturation: Ta ∝ Ia. Parabola then linear. SPEED-CURRENT: N ∝ 1/φ ∝ 1/Ia. Speed decreases sharply as load increases. AT NO LOAD: Ia is tiny → φ is tiny → Speed becomes dangerously HIGH! Series motor MUST NEVER be started with no load! CONCLUSION: Very high starting torque. Speed adjusts with load. Used in: cranes, hoists, electric trains, traction applications.",
    formula:
      "Ta ∝ Ia² (before saturation)\nTa ∝ Ia  (after saturation)\nN ∝ 1/Ia (before saturation)\nN = K×(V - Ia×(Ra+Rse)) / φ",
    tip: "Series motor = train engine! Needs heavy load to run safely. Light load = overspeed danger!",
    example:
      "Electric trains use series motors because they need HUGE torque at start (heavy train from rest).",
  },
  {
    topic: "DC Motor",
    question: "Speed Control Methods of DC Motor",
    answer:
      "Speed equation: N = K×(V - Ia×Ra) / φ. Three control methods: (1) FLUX CONTROL METHOD: Vary φ by adding variable resistor in series with field winding. More resistance → less If → less φ → MORE speed. Gives speed ABOVE base speed. (2) ARMATURE CONTROL METHOD: Add variable resistor in series with armature. More resistance → less voltage across armature → LESS speed. Below base speed. Disadvantage: High power loss (I²R in resistor). (3) VOLTAGE CONTROL METHOD: Vary supply voltage to armature directly. More efficient. Modern VFDs use this principle electronically.",
    formula:
      "N = K × (V - Ia×Ra) / φ\nSpeed ∝ V (directly)\nSpeed ∝ 1/φ (inversely)\nSpeed inversely ∝ Ia×Ra (voltage drop)",
    tip: "Flux control = change gear ratio. Armature control = apply brakes. Voltage control = press gas pedal.",
    example:
      "Ward-Leonard system uses a motor-generator set to give variable voltage for armature control.",
  },
  {
    topic: "DC Motor",
    question: "Starting Methods for DC Motor (3-Point and 4-Point Starter)",
    answer:
      "WHY STARTER NEEDED? At start, Eb=0. So Ia = V/Ra only. For 220V, Ra=0.5Ω: Ia = 220/0.5 = 440A! (20× rated current). This burns armature and damages brushes. Solution: Insert resistance in series with armature at start, then reduce gradually. 3-POINT STARTER (Shunt Starter): 3 terminals: Line (L), Armature (A), Field (F). NVC (No Voltage Coil) holds arm in running position. OLC (Overcurrent Coil) releases arm on overload. Resistance is cut out step by step as motor accelerates. 4-POINT STARTER: Extra 4th terminal for NVC connected directly across supply. NVC not affected by field current changes. Better for flux control speed regulation.",
    formula:
      "At start:  Ia = V / (Ra + R_starter)\nAt full speed: R_starter = 0, Ia = (V - Eb) / Ra\nMaking current = 2.55 × Breaking current\nStarting current limited to 1.5–2× rated current",
    tip: "Starter = dimmer switch for current. Turn slowly to avoid shocking the motor!",
    example:
      "Without starter: 440A at start. With starter (5Ω): Ia = 220/5.5 = 40A. Safe!",
  },
  {
    topic: "DC Motor",
    question: "Why can't a DC Series Motor be started on No-Load?",
    answer:
      "When a series motor has no load: No load → very small armature current Ia → very small field flux φ (because φ ∝ Ia in series motor). From speed equation: N ∝ 1/φ. Since φ is very small, N becomes extremely large - dangerously high RPM! The motor can mechanically disintegrate from centrifugal forces. Bearings fail, windings fly out. Catastrophic damage! This is why series motors are NEVER used with belt drives (belt might slip off, leaving motor with no load).",
    formula:
      "N ∝ V/φ ∝ V/Ia\nAt no load: Ia → 0, φ → 0, N → ∞!\nSpeed is theoretically INFINITE at no load.",
    tip: "Series motor without load = car with no speed limiter on a downhill slope. Runaway!",
    example:
      "Series motors used in cranes, trains - always have mechanical load. Never belt-driven.",
  },
  {
    topic: "DC Motor",
    question: "Power Stages in DC Motor and Efficiency",
    answer:
      "Power flows through three stages in a DC motor: Stage A (Input): Electrical input = V × IL (watts). A to B: Copper losses subtracted (Ia²×Ra, field copper loss). Stage B: Mechanical power developed in armature = Eb × Ia (watts). B to C: Iron and friction losses subtracted. Stage C (Output): Mechanical output power at shaft. Why is shaft torque less than armature torque? Because some torque is used to overcome internal mechanical losses (friction, windage).",
    formula:
      "Input = V × IL\nPower developed = Eb × Ia = (V - Ia×Ra) × Ia\nOverall efficiency:    ηc = C/A\nElectrical efficiency: ηe = B/A\nMechanical efficiency: ηm = C/B\nOverall = Electrical × Mechanical",
    tip: "Input power is like gross salary. Losses are taxes. Output = what you actually take home!",
    example: "",
  },

  // ── TRANSFORMER ────────────────────────────────────────────────────────────
  {
    topic: "Transformer",
    question: "What is a Transformer and what are its uses?",
    answer:
      "A transformer is a static electrical machine that transfers electrical power from one circuit to another through electromagnetic induction, while changing voltage and current levels. It works ONLY on AC (not DC). Uses of transformer: (1) Change voltage and current levels (step-up or step-down). (2) Impedance matching device (for maximum power transfer). (3) Electrical isolation (isolating transformer, turns ratio = 1:1). (4) Can change effective value of capacitor, resistor, or inductor. What if DC is connected? No change in flux → no back EMF → low resistance primary draws huge current → WINDING BURNS!",
    formula:
      "Turns ratio: a = N1/N2 = V1/V2 = I2/I1\nV1/V2 = N1/N2  (voltage ∝ turns)\nI1×N1 = I2×N2  (ampere-turns balance)\nImpedance transfer: Zp = (N1/N2)² × Zs",
    tip: "Transformer is like a hydraulic system: increase pressure (voltage) = decrease flow (current).",
    example:
      "Step-up: 11kV → 132kV for long-distance transmission. Step-down: 33kV → 415V for homes.",
  },
  {
    topic: "Transformer",
    question: "Why is Transformer rated in kVA not kW?",
    answer:
      "The two main losses in a transformer are: Iron losses (core losses) - depend only on VOLTAGE (constant regardless of load). Copper losses - depend only on CURRENT (I²R in windings). Neither loss depends on the Power Factor of the load! So transformer performance doesn't change with PF. If rated in kW, the manufacturer would need to know the load PF (which varies with consumer). Since losses depend only on V and I (not PF), rating is given as S = V×I in kVA. This is independent of load power factor. Remember: Transformer is NOT a load - it just transfers power. PF is a load characteristic.",
    formula:
      "S = V × I  (kVA - independent of PF)\nP = V × I × cos(φ)  (kW - depends on PF)\nkVA rating is independent of load power factor\nMotor rated in kW because it IS a load with fixed PF",
    tip: "Transformer doesn't care about PF. It just passes power. So kVA (not kW) makes sense!",
    example:
      "1 MVA transformer at PF=0.8 delivers 800 kW. At PF=1.0, delivers 1000 kW. Same transformer!",
  },
  {
    topic: "Transformer",
    question: "Efficiency of Transformer and Condition for Maximum Efficiency",
    answer:
      "Full-load efficiency of transformer: η = Output / (Output + Losses). Two types of losses: Iron (core) loss Pi - CONSTANT at all loads (depends only on voltage). Copper loss Pc - VARIABLE, proportional to load current squared. CONDITION FOR MAXIMUM EFFICIENCY: Differentiate efficiency equation w.r.t. load current I2, set to zero. Result: Iron loss = Copper loss (Pi = x²×Pc_FL). Important: kVA at maximum efficiency is INDEPENDENT of power factor! Distribution transformers designed for max efficiency at 70% of full load (they often run at partial load during day).",
    formula:
      "η = (x×S×cos(φ)) / (x×S×cos(φ) + Pi + x²×Pc)\nx = fraction of full load (0 to 1)\nMax efficiency when: Pi = x²×Pc\nx_maxeff = √(Pi / Pc_FL)\nOutput kVA at max eff = Full-load kVA × √(Pi/Pc_FL)",
    tip: "Max efficiency = sweet spot where iron and copper losses are EQUAL. Like balancing a see-saw!",
    example:
      "50kVA transformer, Pi=500W, Pc_FL=800W. Max eff at x=√(500/800)=0.79 = 79% load.",
  },
  {
    topic: "Transformer",
    question: "Current Transformer (CT) and Potential Transformer (PT)",
    answer:
      "CURRENT TRANSFORMER (CT): Used to measure HIGH alternating current in power lines. It is actually a step-UP transformer (steps up voltage, steps DOWN current). Connected in SERIES with the line. Secondary usually rated 5A. CRITICAL: Never open-circuit CT secondary while primary carries current! If secondary is open: no secondary current → no opposing MMF → huge flux builds up → very high secondary voltage → insulation damage + safety hazard to personnel! POTENTIAL TRANSFORMER (PT): Used to measure HIGH voltage lines (33kV, 66kV etc.). It is a step-DOWN transformer. Connected in PARALLEL with the line. Secondary usually rated 110V.",
    formula:
      "CT: Ip/Is = Ns/Np  (step-up in voltage)\nPT: Vp/Vs = Np/Ns  (step-down in voltage)\nCT burden = Vs × Is (VA rating)\nKnee point voltage = voltage at which CT saturates",
    tip: "CT = current spy in series. PT = voltage spy in parallel. Never open-circuit the CT spy!",
    example:
      "33kV line measured with PT (Np/Ns = 300:1) gives 110V → safe for meters and relays.",
  },
  {
    topic: "Transformer",
    question: "Open Circuit (OC) Test and Short Circuit (SC) Test",
    answer:
      "These tests determine transformer parameters without fully loading it. OC TEST (performed on LV side): Secondary open-circuited. Rated voltage applied to LV primary. Measures: Core (iron) losses Pi and no-load current Io. Why LV side? Lower voltage instrument needed, cheaper, safer. With negligible primary current, copper loss is negligible. Wattmeter reading = Core losses only. SC TEST (performed on HV side): Secondary short-circuited. Voltage raised from zero until full-load current flows. Input voltage needed is only ~3–5% of rated voltage. At such low voltage, core losses are negligible. Wattmeter reading = Full-load copper losses only. Why HV side? Rated current on HV side is smaller (safer for lab instruments).",
    formula:
      "OC test: Pi = W_OC (wattmeter reading)\n  Io = ammeter reading (no-load current)\nSC test: Pc_FL = W_SC (wattmeter reading)\n  Zeq = V_SC / I_SC (equivalent impedance)\n  Req = W_SC / I_SC² (equivalent resistance)",
    tip: "OC test finds iron losses (constant). SC test finds copper losses (variable). Together = full picture!",
    example:
      "SC test uses only 3–5% of rated voltage to get full-load current. So core loss is negligible.",
  },
  {
    topic: "Transformer",
    question:
      "Types of Transformers: Core-type vs Shell-type, Power vs Distribution",
    answer:
      "CORE-TYPE: Coils wound around a core (coils are outside). Better cooling. Used for high-voltage applications, power transformers, distribution transformers. SHELL-TYPE: Core surrounds the coils (coils are inside). Better magnetic shielding. Used for low-voltage, electronic circuits, low power factor loads. POWER TRANSFORMER: Extra-high voltage step-up transformer at generating stations. Voltage > 33kV. Rated in MVA. Efficiency ~98%. Operates at full load mostly. Judged by commercial efficiency. DISTRIBUTION TRANSFORMER: Step-down transformer at distribution substations. Voltage up to 33kV. Small size. Max efficiency at 70% loading. Works 24hrs at varying loads. Judged by all-day efficiency.",
    formula:
      "Distribution transformer max efficiency at 70% load\nAll-day efficiency = Output kWh / Input kWh (over 24 hours)\nDyn11: D=Delta primary, y=star secondary, n=neutral, 11=30° phase shift",
    tip: "Power transformer = highway (always full). Distribution transformer = local road (varying traffic).",
    example:
      "Indian power system: Generate at 11kV, step-up to 132/220/400kV, step-down to 11kV for distribution.",
  },

  // ── INDUCTION MOTOR ────────────────────────────────────────────────────────
  {
    topic: "Induction Motor",
    question: "Working Principle of Induction Motor",
    answer:
      "An induction motor needs only ONE supply (unlike DC motor needing two). STEP-BY-STEP: (1) AC supply to stator winding → produces Rotating Magnetic Field (RMF) at synchronous speed. (2) RMF cuts rotor conductors (which are short-circuited by end rings). (3) By Faraday's law → EMF induced in rotor conductors. (4) Since rotor circuit is closed → rotor current flows. (5) Rotor current creates its own magnetic field. (6) Stator flux and rotor flux interact → torque is produced. (7) Rotor rotates in direction of RMF. WHY NOT AT SYNCHRONOUS SPEED? If rotor reached Ns, no relative motion → no induced EMF → no current → no torque → rotor slows. Always below Ns!",
    formula:
      "Synchronous speed: Ns = 120×f / P  (rpm)\nSlip: s = (Ns - N) / Ns\nRotor current frequency: fr = s × f\nRotor EMF at slip s: Er = s × E2 (standstill EMF)",
    tip: "Induction motor = rotating transformer! Stator=primary, Rotor=short-circuited secondary.",
    example:
      "4-pole, 50Hz motor: Ns=1500rpm. At full load runs at ~1440rpm (slip=4%).",
  },
  {
    topic: "Induction Motor",
    question:
      "What is Slip? Why doesn't induction motor reach synchronous speed?",
    answer:
      "Slip is the difference between synchronous speed and actual rotor speed, expressed as a percentage of synchronous speed. WHY SLIP EXISTS: If rotor reaches synchronous speed, there would be NO relative motion between RMF and rotor. No cutting of flux → No induced EMF → No rotor current → No torque. Motor decelerates. So rotor always runs BELOW synchronous speed. Slip always positive. SLIP VALUES: At standstill (start): s=1. At no load: s~0.001. At full load: s = 0.03 to 0.05 (3–5%). Above synchronous speed (generator mode): s is negative.",
    formula:
      "s = (Ns - N) / Ns × 100%\nN = Ns × (1 - s)  [rotor speed]\nNs = 120×f/P  [synchronous speed]\nTorque: T ∝ s×E2²×R2 / (R2² + (s×X2)²)",
    tip: "Slip is like a clutch that slips. The more load, the more it slips (lower speed).",
    example:
      "6-pole, 50Hz motor: Ns=1000rpm. At 4% slip: N = 1000×(1-0.04) = 960 rpm.",
  },
  {
    topic: "Induction Motor",
    question:
      "Why is single-phase IM NOT self-starting? How to make it self-starting?",
    answer:
      "SINGLE-PHASE AC creates a PULSATING magnetic field (alternates along one axis only). This pulsating field can be resolved into two equal rotating fields spinning opposite directions. These two fields produce equal and opposite torques → NET TORQUE = ZERO → motor doesn't start! However, once given a push in either direction, one field dominates and motor continues rotating. HOW TO MAKE SELF-STARTING: Create a rotating magnetic field using additional winding: (1) SPLIT-PHASE: Auxiliary winding with high R/X ratio. Creates phase difference. Centrifugal switch disconnects aux winding at ~75% synchronous speed. (2) CAPACITOR-START: Capacitor in series with aux winding for better phase shift (90°). (3) CAPACITOR-RUN: Capacitor permanently connected. Better running performance. (4) SHADED-POLE: Copper ring on part of stator pole. Simplest, lowest torque.",
    formula:
      "For rotating field, need two phases displaced in time AND space\nSplit-phase: current phase difference = 20–30°\nCapacitor-start: current phase difference ≈ 90° (ideal)\nSpeed variation from no-load to full-load = 2–5%",
    tip: "3-phase = 3 kids pushing a merry-go-round equally spaced. Single-phase = 1 kid can't start it!",
    example:
      "Ceiling fans use permanent-split capacitor (PSC) motors. Refrigerators use capacitor-start motors.",
  },
  {
    topic: "Induction Motor",
    question: "What are Crawling and Cogging in Induction Motors?",
    answer:
      "CRAWLING: Due to harmonics in the magnetic field, a squirrel cage induction motor sometimes runs stably at 1/7th of its synchronous speed (due to 7th harmonic torque). The motor 'crawls' slowly instead of accelerating to full speed. Prevention: Use skewed rotor slots, or distributed windings to reduce harmonics. COGGING (MAGNETIC LOCKING): At low voltage, the squirrel cage motor sometimes fails to start completely. Occurs when number of stator slots = number of rotor slots. The stator and rotor teeth lock magnetically and the rotor refuses to move. Prevention: Use skewed rotor slots (most effective). Choose different number of stator and rotor slots.",
    formula:
      "Crawling speed = Ns/7  (7th harmonic)\nAlso can crawl at Ns/5 (5th harmonic)\nPrevention: Skewed rotor slots reduce harmonics\nCogging occurs when stator slots = rotor slots",
    tip: "Crawling = car stuck in 1st gear that won't shift up. Cogging = car engine won't start at all!",
    example:
      "Both crawling and cogging are eliminated by skewing rotor slots by one stator slot pitch.",
  },
  {
    topic: "Induction Motor",
    question: "Methods of Starting 3-Phase Induction Motor",
    answer:
      "METHODS: (1) DOL (Direct On-Line) Starter, (2) Star-Delta, (3) Autotransformer, (4) Slip-Ring. (1) DOL: Motor connected directly to supply. Full starting current (6–8× rated). Full starting torque. Used for small motors up to 5kW. Simple and cheap. (2) STAR-DELTA STARTER: Start in star connection, switch to delta at ~80% speed. Star reduces phase voltage to VL/√3. Torque reduced to 1/3 of DOL. Starting current reduced to 1/3. Motor must be designed to run in delta normally. (3) AUTOTRANSFORMER STARTER: More flexible, can set custom voltage ratio. (4) ROTOR RESISTANCE (Slip-Ring only): External resistance in rotor circuit. Maximum torque at start. Resistance removed as speed increases.",
    formula:
      "Star: V_phase = VL / √3\nTorque ∝ V²\nStar starting torque = (1/3) × DOL torque\nStar starting current = (1/3) × DOL current\nMax torque condition: R2 = X2 (rotor resistance = rotor reactance)",
    tip: "Star-Delta = starting in low gear. Once up to speed, shift to high gear (delta)!",
    example:
      "Star-Delta is most common industrial starter. Saves 67% starting current vs DOL.",
  },
  {
    topic: "Induction Motor",
    question: "Induction Motor Braking Methods",
    answer:
      "Three methods to quickly stop or slow an induction motor: (1) REGENERATIVE BRAKING: Motor speed exceeds synchronous speed (s becomes negative). Motor acts as generator, returns power to supply. Most efficient (energy recovered). Used in cranes (lowering loads), electric vehicles, escalators. (2) PLUGGING (Counter-current braking): Two supply phases reversed suddenly. Reversal of phase sequence reverses RMF direction → braking torque. Motor must be disconnected the instant it stops (else it reverses). Very high braking torque but energy wasted. Used for emergency stops. (3) DYNAMIC BRAKING: Motor disconnected from AC supply. DC current injected into stator → creates stationary magnetic field. Rotor motion through static field → induced current → braking torque. Motor comes to smooth stop.",
    formula:
      "Regenerative braking: s < 0 (speed > Ns)\nPlugging: phase sequence reversed, s = 2-s\nDynamic braking: DC injected, rotor KE dissipated\nTypes of dynamic: AC, DC, self-dynamic, zero-sequence",
    tip: "Regen = recover energy. Plugging = emergency brake. Dynamic = controlled smooth stop.",
    example:
      "Regenerative braking in electric cars recovers 20–70% of kinetic energy back to battery.",
  },

  // ── SYNCHRONOUS MOTOR ──────────────────────────────────────────────────────
  {
    topic: "Synchronous Motor",
    question: "Why is Synchronous Motor NOT self-starting?",
    answer:
      "A synchronous motor is a DOUBLY EXCITED machine: Stator: 3-phase AC winding → creates rotating magnetic field (RMF) at synchronous speed. Rotor: DC excited → creates FIXED (stationary at start) magnetic poles. THE PROBLEM: The RMF rotates at synchronous speed immediately (very fast). At one instant: Stator N attracts rotor S → tries to pull rotor clockwise. Half cycle later: Stator N now repels rotor N → tries to push rotor counter-clockwise. These forces alternate 50 times per second (at 50Hz). Due to INERTIA, the rotor cannot respond so fast. Net average torque = ZERO. SOLUTION: Bring rotor to near synchronous speed first, then apply DC excitation. STARTING METHODS: (1) Using damper winding - starts as induction motor. (2) Using DC machine coupled. (3) Starting as slip-ring induction motor.",
    formula:
      "At synchronous speed: Rotor locked to RMF (magnetic locking)\nBelow synchronous speed: Average torque = 0\nStarting: bring rotor to ~95% Ns, then apply DC\nPull-in torque = torque needed to pull rotor into synchronism",
    tip: "Like trying to grab a fast rotating fan blade with your hand. Hand can't react fast enough!",
    example:
      "Synchronous motors run at EXACT synchronous speed. Speed is perfectly constant with load changes.",
  },
  {
    topic: "Synchronous Motor",
    question: "What is Hunting and how does Damper Winding prevent it?",
    answer:
      "HUNTING: When load on synchronous motor suddenly changes, the rotor oscillates (swings back and forth) about its new equilibrium position. This is called hunting. EFFECTS OF HUNTING: May lose synchronism (motor stops). Mechanical stress on shaft. Increased losses and temperature. Noise and vibrations. DAMPER WINDING: Short-circuited copper bars embedded in the faces of rotor poles. FUNCTION 1 - STARTING: Acts like squirrel cage rotor bars. At start: Stator RMF induces EMF in damper bars → current flows → torque produced. Motor starts like an induction motor and accelerates. When speed reaches ~95% Ns: DC excitation applied → magnetic locking → runs as synchronous motor. FUNCTION 2 - HUNTING PREVENTION: When hunting occurs, there IS relative motion between rotor and RMF → EMF induced → current in damper bars → torque opposing oscillation. Hunting is damped out quickly.",
    formula:
      "Pull-in torque = torque to bring IM into synchronism\nPull-out torque = maximum load motor can handle before losing sync\nHunting frequency: fh = (1/2π) × √(T_s / J)\nT_s = synchronizing torque, J = moment of inertia",
    tip: "Damper winding = shock absorber for synchronous motors. Smooths out load oscillations!",
    example:
      "Without damper winding, even small load changes could cause dangerous hunting oscillations.",
  },
  {
    topic: "Synchronous Motor",
    question:
      "Under-excitation, Over-excitation, Critical excitation and Synchronous Condenser",
    answer:
      "The DC field excitation controls the power factor of the synchronous motor: UNDER-EXCITATION: DC field current less than normal. Eb < V. Motor draws LAGGING current from supply (like an inductor). CRITICAL/NORMAL EXCITATION: Eb = V. Motor operates at UNITY power factor (PF=1). Minimum armature current for given load. OVER-EXCITATION: DC field current more than normal. Eb > V. Motor draws LEADING current from supply (like a capacitor). SYNCHRONOUS CONDENSER: An over-excited synchronous motor running at NO LOAD. It draws leading current → acts like a variable capacitor. Used in substations to improve power factor. Advantage over static capacitors: Reactive power can be continuously varied by adjusting field current. V-CURVES: Plot of armature current (Ia) vs field current (If) → V-shaped. INVERTED V-CURVES: Plot of power factor vs field current → inverted V shape.",
    formula:
      "Under-excited: Eb < V, lagging PF\nCritical:      Eb = V, unity PF (minimum Ia)\nOver-excited:  Eb > V, leading PF\nV-curve: Ia vs If (V-shaped minimum at unity PF)\nInverted V: PF vs If (peak at unity PF)",
    tip: "Over-excited synchronous motor = super variable capacitor. Adjust knob (field current) = adjust PF!",
    example:
      "Power factor of synchronous condenser can be controlled from 0.6 lag to 0.6 lead continuously.",
  },

  // ── CIRCUIT BREAKER ────────────────────────────────────────────────────────
  {
    topic: "Circuit Breaker",
    question: "What is a Circuit Breaker? How does it work? Types?",
    answer:
      "A circuit breaker is an automatically operated electrical switch that protects circuits from damage caused by excess current from an overload or short circuit. Unlike a fuse, it can be reset (manually or automatically). WORKING PRINCIPLE: Two contacts - fixed and moving. Under normal conditions: contacts closed. On fault: relay detects fault → trips circuit breaker → moving contact separates from fixed. An ARC forms between separating contacts. Arc must be extinguished. TYPES OF CIRCUIT BREAKERS: (1) Air Blast CB: High-pressure air blast extinguishes arc. 1–15kV. (2) Oil CB: Oil vapourizes to H₂ gas that extinguishes arc. 1–330kV. (3) Minimum Oil CB: Less oil, smaller. (4) SF₆ CB: SF₆ gas (electronegative) absorbs electrons → arc extinguished. 3.6–760kV. Best arc extinction. Noise-free. (5) Vacuum CB (VCB): Vacuum has very high dielectric strength. 11–33kV. Fast operation. Almost maintenance-free.",
    formula:
      "Making current (peak) = 2.55 × Breaking current\nRupturing capacity = Short-circuit current × Rated voltage\nSF₆ dielectric strength = 3× air\nVCB dielectric strength = 8× air\nSF₆: 3.6–760kV, Vacuum: 11–33kV, Oil: 1–330kV",
    tip: "SF₆ = best for HV. VCB = best for medium voltage. Air = low voltage. Oil = old technology.",
    example:
      "SF₆ gas molecules are 5× larger than air - they capture free electrons that sustain the arc!",
  },
  {
    topic: "Circuit Breaker",
    question: "MCB vs MCCB vs RCCB vs Fuse - Differences",
    answer:
      "FUSE: Metal element that melts when current exceeds rating. One-time use. Must replace after operation. Very fast. Cheap. CIRCUIT BREAKER: Electromechanical switch. Can be reset after tripping. Reusable. More expensive. Can be set to trip at different currents. MCB (Miniature Circuit Breaker): Rating up to 100A. Domestic/residential. Protects against overload and short circuit. Cannot be adjusted. MCCB (Molded Case Circuit Breaker): Rating up to 2500A. Industrial. Adjustable tripping characteristics. More robust. RCCB/RCD (Residual Current Circuit Breaker): Detects EARTH LEAKAGE current. Trips when difference between live and neutral current exceeds ~30mA. Protects PEOPLE from electric shock. Does NOT protect against overload. Used in bathrooms, kitchens, outdoor circuits. RCBO = MCB + RCCB combined in one device.",
    formula:
      "MCB: up to 100A, domestic\nMCCB: up to 2500A, industrial, adjustable\nRCCB: detects 30mA earth leakage (life safety)\nSF₆ CB: 3.6–760kV, 10000–50000 MVA\nVCB: 11–33kV, 250–2000 MVA",
    tip: "MCB = equipment protection. RCCB = people protection. Both together = complete safety system!",
    example:
      "30mA through the heart for 100ms can be fatal. RCCB trips in <30ms at 30mA - life saver!",
  },
  {
    topic: "Circuit Breaker",
    question: "What is the difference between CB and Isolator?",
    answer:
      "CIRCUIT BREAKER: Automatically breaks circuit on fault (short circuit, overload). Can also be manually operated. Works under BOTH loaded (ON-load) and unloaded (OFF-load) conditions. Has arc-interrupting capability. Breaks fault current safely. ISOLATOR (Disconnector): A mechanical switch used to isolate (disconnect) a section of the power system. Can ONLY be operated when the circuit is ALREADY DE-ENERGIZED (OFF-load device only!). Has NO arc-interrupting capability. Opening under load causes dangerous arc. Used for: Safe maintenance isolation, ensuring equipment is dead before working on it. OPERATING SEQUENCE (very important!): To isolate: First TRIP the Circuit Breaker, THEN open the Isolator. To reconnect: First CLOSE the Isolator, THEN CLOSE the Circuit Breaker.",
    formula:
      "Circuit breaker: breaks fault current (both ON and OFF load)\nIsolator: opens ONLY after circuit breaker has tripped (OFF load only)\nRule: NEVER open isolator under load - dangerous arc!",
    tip: "CB = fire extinguisher (handles emergencies). Isolator = power switch (only when safe).",
    example:
      "In a substation: relay detects fault → signals CB to trip → then isolator opened for maintenance.",
  },

  // ── PLC ────────────────────────────────────────────────────────────────────
  {
    topic: "PLC",
    question: "What is PLC? Components and Working Principle?",
    answer:
      "PLC (Programmable Logic Controller) is an industrial digital computer designed for controlling manufacturing processes. WHY USE PLC? In an industry with many machines, motors, fans, lights, and controls: Manual operation needs thousands of switches, relays, wires - complex, unreliable. PLC can virtually replace 500+ relays in one small box. Easy to program. Easy to modify. Easy to troubleshoot. SCAN CYCLE - How PLC works in 3 steps repeatedly: (1) INPUT SCAN: Read all input signals (sensors, switches, buttons). (2) PROGRAM EXECUTION: Run the ladder logic/program using input data. (3) OUTPUT UPDATE: Send results to output devices (motors, valves, lights). SCAN TIME: Time to complete one full cycle. Usually 1–100 milliseconds. MAIN COMPONENTS: CPU (brain), Memory, Power Supply, I/O Modules, Communication module. PROGRAMMING LANGUAGES: Ladder Logic (most common), Function Block, Instruction List, SFC.",
    formula:
      "Power Supply: 120–230V AC or 24V DC input, 5V DC output (2–5A)\nScan time = Input read + Program execute + Output update\nFaster scan = faster response to process changes\nSinking: Common GND (-). Sourcing: Common VCC (+)",
    tip: "PLC = brain of the factory. It reads, thinks, and acts - repeatedly, fast and reliably!",
    example:
      "Famous brands: Siemens (S7 series), ABB, Allen-Bradley (Rockwell), Mitsubishi, Honeywell.",
  },

  // ── VFD ────────────────────────────────────────────────────────────────────
  {
    topic: "VFD",
    question: "What is a VFD and how does it work?",
    answer:
      "VFD (Variable Frequency Drive) = VSD (Variable Speed Drive). Used to control motor speed by varying the supply frequency and voltage. WHY VFD? Motor speed is directly proportional to supply frequency. By controlling frequency, we control speed precisely. HOW VFD WORKS - Three stages: (1) RECTIFIER: Converts AC input to DC. Uses diodes or thyristors. (2) DC BUS: Capacitor bank smooths and stores DC voltage. (3) INVERTER: Converts DC back to AC at desired frequency. Uses IGBT transistors switched by PWM (Pulse Width Modulation). BENEFITS: Energy savings up to 50% for pumps and fans. Soft start (no current surge). Precise speed control. Longer motor life (less mechanical stress). VFD vs SOFT STARTER: Soft starter only reduces starting voltage gradually (no speed control). VFD changes frequency → true speed control + soft start + energy saving.",
    formula:
      "Motor speed: Ns = 120×f/P  (rpm)\nTo halve speed: halve frequency (V/f = constant)\nV/f control: V/f = constant (maintains motor flux)\nVector control: independent flux and torque control\nEnergy saving in fans/pumps: Power ∝ speed³",
    tip: "VFD = volume knob for motor speed. Turn it up or down smoothly and precisely!",
    example:
      "Reducing fan speed by 20% cuts power consumption by ~50% (cubic law). VFDs save huge energy!",
  },

  // ── SCADA ──────────────────────────────────────────────────────────────────
  {
    topic: "SCADA",
    question: "What is SCADA? How does it work?",
    answer:
      "SCADA = Supervisory Control And Data Acquisition. A system for monitoring and controlling industrial processes remotely and locally. SCADA ARCHITECTURE (3 layers from bottom to top): (1) FIELD LEVEL: Physical equipment - sensors, motors, pumps, valves, actuators. (2) CONTROL LEVEL: PLCs (Programmable Logic Controllers) and RTUs (Remote Terminal Units). These collect data from field devices and communicate with HMI. (3) SUPERVISORY LEVEL: HMI (Human Machine Interface) - graphical display for operators. HOW IT WORKS: Sensors measure → PLCs process → SCADA software collects → HMI displays → Operator decides → Commands sent back → PLCs execute → Actuators respond. APPLICATIONS: Power distribution, Water treatment, Oil/gas pipelines, Manufacturing, Transportation, Renewable energy.",
    formula:
      "Data flow: Field devices → PLCs/RTUs → SCADA Server → HMI\nCommands: HMI → SCADA Server → PLCs/RTUs → Actuators\nCommunication protocols: Modbus, DNP3, IEC 61850",
    tip: "SCADA = command center of industrial plant. Like air traffic control for factories!",
    example:
      "A city water system uses SCADA to monitor 100s of pumping stations from one control room.",
  },

  // ── RELAY ──────────────────────────────────────────────────────────────────
  {
    topic: "Relay",
    question: "What is a Relay? Types and Working Principle?",
    answer:
      "A relay is an electromechanical switch: a small electrical signal controls a large circuit. PARTS: Electromagnet (coil), Movable armature, Fixed contacts (NO and NC), Spring. WORKING: Small current → coil → magnetic field → attracts armature → contacts change state (NO closes, NC opens). Remove current → spring returns armature. CONTACT TYPES: NO (Normally Open): Open when coil not energized, closes when energized. NC (Normally Closed): Closed when coil not energized, opens when energized. CLASSIFICATION BY POLES/THROWS: SPST, SPDT, DPST, DPDT. TYPES BY FUNCTION: (1) Electromagnetic relay - basic ON/OFF switching. (2) Time Delay relay - ON-delay or OFF-delay. (3) Differential relay - compares currents for protection. (4) Distance/Impedance relay - for transmission line protection. (5) Buchholz relay - transformer internal fault protection. (6) Overcurrent relay - trips when current exceeds setting.",
    formula:
      "Relay operates when: Input quantity > Pickup value\nPSM = Fault current / Pickup current (Plug Setting Multiplier)\nIDMT: Inverse Definite Minimum Time characteristic\nDefinite time relay: fixed time delay regardless of fault current",
    tip: "Relay = doorbell switch for electrical circuits. Small button press, big door opens!",
    example:
      "Relays in protection systems must operate in <100ms to prevent equipment damage.",
  },
  {
    topic: "Relay",
    question: "What is Buchholz Relay and how does it work?",
    answer:
      "The Buchholz relay is a protection device installed in the pipe connecting the main transformer tank to the conservator (oil reservoir). It protects against INTERNAL transformer faults only. MINOR FAULT OPERATION (Alarm): Minor fault in transformer → generates heat → decomposes oil into gas bubbles → bubbles rise up through pipe → collect in Buchholz relay chamber → oil level in chamber drops → UPPER FLOAT tilts → closes upper mercury switch → ALARM CIRCUIT activated. Operator alerted. MAJOR FAULT OPERATION (Trip): Severe fault (phase-to-earth) → large amount of gas produced rapidly → fast oil surge tilts the LOWER FLAP → closes lower mercury switch → TRIP CIRCUIT activated → Circuit breakers on both sides open → Transformer isolated from supply. FAULTS DETECTED: Insulation failure, inter-turn shorts, core faults, low oil level.",
    formula:
      "Minor fault → gas → upper float → ALARM\nMajor fault → surge → lower flap → TRIP\nKnee point voltage: CT saturation voltage\nBuchholz: only for internal faults, oil-type transformers",
    tip: "Buchholz = canary in a coal mine. Minor fault = canary sings (alarm). Major = canary dies (trip)!",
    example:
      "Buchholz relay was invented by Max Buchholz in 1921. Standard protection for oil transformers.",
  },
  {
    topic: "Relay",
    question: "What is Differential Protection Relay?",
    answer:
      "Principle: Compare current ENTERING a protected zone with current LEAVING it. Normally they are equal (Kirchhoff's current law). Difference = fault inside! USED FOR: Generator, power transformer, motor, feeder, busbar protection. WORKING: CTs on both sides of protected equipment. Normal: I1 = I2, differential current Idiff = 0, relay does not operate. Internal fault: I1 ≠ I2, Idiff = I1-I2, relay trips both circuit breakers. PROBLEM WITH TRANSFORMER DIFFERENTIAL PROTECTION: When transformer is first energized, large magnetizing inrush current flows (up to 10× FL). This flows in primary only (not secondary). Looks like an internal fault! → False trip. SOLUTION: Harmonic restraint. Inrush current has high 2nd harmonic. Relay is made to restrain (not trip) when 2nd harmonic is detected.",
    formula:
      "Normal: I1 = I2, Idiff = 0 → No operation\nFault:  I1 ≠ I2, Idiff = I1-I2 → Relay trips\nBiased relay: (I1-I2) / ((I1+I2)/2) > bias setting\nInrush current: up to 10× full-load current, high 2nd harmonic",
    tip: "Differential relay = referee comparing two scoreboards. If they don't match, FOUL!",
    example:
      "Differential protection used for transformers > 2 MVA (cost justified for large machines).",
  },

  // ── TRANSMISSION LINE ──────────────────────────────────────────────────────
  {
    topic: "Transmission Line",
    question: "What is Corona Effect? How to reduce it?",
    answer:
      "Corona is the ionization of air surrounding a high-voltage conductor when the electric field at the conductor surface exceeds the breakdown strength of air (~30 kV/cm). EFFECTS: Violet glow around conductor. Hissing/crackling noise. Production of ozone. Power loss (corona loss). Radio interference. FACTORS AFFECTING CORONA: Line voltage, conductor diameter, spacing, air density, weather conditions (rain/fog increases corona). WHY EHV BUSBARS ARE HOLLOW AND CIRCULAR: Circular shape distributes electric field uniformly. Hollow conductor increases diameter without increasing weight → reduces electric field at surface → avoids corona. PREVENTION: (1) Bundle conductors (multiple conductors per phase). (2) Increase conductor diameter (ACSR, hollow conductors). (3) Increase conductor spacing. (4) Use corona rings/guard rings at terminals.",
    formula:
      "Critical disruptive voltage Vd = m0 × δ × r × ln(d/r)\nm0 = surface irregularity factor\nδ = air density factor (= 3.92h/(273+t))\nCorona loss: Peek's formula\nBundle conductors: equivalent radius increases, field reduces",
    tip: "Corona = air breaking down around wire like a weak spark. It's like a tiny constant lightning!",
    example:
      "HVDC lines have less corona loss than HVAC because only positive or negative corona, not both.",
  },
  {
    topic: "Transmission Line",
    question: "What is Ferranti Effect, Skin Effect, Proximity Effect?",
    answer:
      "FERRANTI EFFECT: On long transmission lines (>240km) at light load or no load, the receiving end voltage EXCEEDS the sending end voltage. Cause: Line capacitance draws leading (charging) current. This current through line inductance produces a voltage rise at receiving end. Prevention: Connect shunt reactors at receiving end. SKIN EFFECT: At high AC frequency, current flows mainly on the SURFACE (skin) of conductor, not through center. Effective cross-section reduces → effective resistance increases. Proportional to frequency. Prevention: ACSR bundles, hollow conductors, stranded conductors. PROXIMITY EFFECT: When conductors carry AC and are close to each other, the magnetic field of one conductor affects current distribution in adjacent conductor. Current is non-uniformly distributed → effective resistance increases. Prevention: Increase spacing between conductors, reduce frequency.",
    formula:
      "Ferranti: Vr > Vs at no load (capacitive effect)\nSkin depth: δ = √(2ρ / (ωμ))\nAt 50Hz, skin depth in copper = ~9.3mm\nTransposition: periodic swapping of conductor positions to balance impedances",
    tip: "Ferranti = water pressure increasing at the end of a long empty pipe (no flow = pressure builds)!",
    example:
      "Skin effect causes 33kV line resistance to be 10–15% higher than DC resistance.",
  },
  {
    topic: "Transmission Line",
    question: "What is Sag and what is ACSR Cable?",
    answer:
      "SAG: The vertical distance between the highest points of support (tower tops) and the lowest point of the conductor between two towers. SAG FORMULA: For equal height supports: Sag = wL²/(8T). where w=weight per unit length, L=span, T=tension in conductor. High sag → more conductor needed (cost). But low sag → high tension → risk of breakage in cold weather (conductor contracts and breaks). FACTORS AFFECTING SAG: Temperature (high temp = more sag), Wind, Ice loading, Conductor weight. ACSR (ALUMINUM CONDUCTOR STEEL REINFORCED): Multiple aluminum strands wound around a central steel core. Steel provides: mechanical strength (high tensile strength). Aluminum provides: electrical conductivity, light weight, low cost. Used for: all overhead transmission lines.",
    formula:
      "Sag = wL² / (8T)  [equal height supports]\nT = tension in conductor (N)\nw = weight per unit length (N/m)\nL = span length (m)\nACSR: aluminum conductivity + steel strength",
    tip: "Sag is like a clothesline. Heavy clothes (load) + long line (span) = more droop (sag)!",
    example:
      "ACSR conductors: outer aluminum strands carry current, inner steel strands carry mechanical load.",
  },

  // ── SUBSTATION ─────────────────────────────────────────────────────────────
  {
    topic: "Substation",
    question: "What is a Substation? Components? Types?",
    answer:
      "A substation is a switching, transforming, or converting station located between the generating station and the consumer's distribution network. FUNCTION: Receives high-voltage power → transforms to distribution voltages → distributes to consumers via distribution network. COMPONENTS: Circuit breaker, Lightning arrester, Surge arrester, Busbar, Relay, Current Transformer (CT), Potential Transformer (PT), Isolator/Switch, Distribution transformer, Wave trap (checks frequency variation). TYPES: (1) Indoor Substation - voltages up to 11kV. (2) Outdoor Substation - voltages 33kV and above. (3) Pole-Mounted Substation - small transformer on distribution pole. (4) Underground Substation - urban areas, limited space. EARTHING RESISTANCE: Should be 1 ohm or less. WHY STONES IN SUBSTATION? Stones increase the impedance between person's feet and earth, reducing the risk of step potential shock to personnel.",
    formula:
      "Substation earthing resistance: ≤ 1 ohm\nStep potential = voltage between feet\nTouch potential = voltage from hand to feet\nGuard ring: equalizes potential gradient on insulators",
    tip: "Substation = power junction box. Takes high-voltage power and splits/reduces it for local use.",
    example:
      "India's power grid: generate at 11kV, transmit at 132/220/400kV, distribute at 11kV/415V.",
  },

  // ── POWER SYSTEM ───────────────────────────────────────────────────────────
  {
    topic: "Power System",
    question: "Types of Faults in 3-Phase Power System",
    answer:
      "Electrical faults = abnormal deviation of voltage and current from normal values. TWO MAIN CATEGORIES: (1) SYMMETRICAL FAULTS: All three phases affected equally. Three-phase short circuit (LLL) - most severe, least common (~5%). Three-phase to ground (LLLG). Analysis: Simple single-phase equivalent circuit. (2) UNSYMMETRICAL FAULTS (most common in practice): Single Line to Ground (LG) - most common fault (~70% of all faults). Line to Line (LL) - ~15% of faults. Double Line to Ground (LLG) - ~10% of faults. Analysis: Symmetrical components method (sequence networks). EFFECTS OF ELECTRICAL FAULTS: High fault current → insulation damage, equipment burning. Voltage collapse → other equipment affected. Danger to personnel. System instability.",
    formula:
      "LLL fault: If = V/Z1 (positive sequence impedance)\nLG fault:  If = 3V/(Z1+Z2+Z0)\nLL fault:  If = √3×V/(Z1+Z2)\nLLL gives highest fault current",
    tip: "LG fault is most common (70%). LLL is most severe but rarest. Design for worst case (LLL)!",
    example:
      "Load flow methods: Gauss-Seidel (simple), Newton-Raphson (fast convergence, most used).",
  },
  {
    topic: "Power System",
    question: "What is Corona? What is Critical Disruptive Voltage?",
    answer:
      "Critical Disruptive Voltage (Vd): The minimum phase-to-neutral voltage at which corona discharge begins. Below this voltage, no corona. Above it, corona occurs. At critical disruptive voltage, the electric field at conductor surface equals the breakdown strength of air (~30 kV/cm at standard conditions). This is the voltage at which air ionization (corona) starts. Why important in design: Transmission lines must be designed so that normal operating voltage is safely below the critical disruptive voltage, or bundle conductors used. SLACK BUS (Reference Bus): In power system load flow analysis, one bus is chosen as the reference (slack bus). It balances the active and reactive power of the system. Its voltage is fixed as reference (usually 1.0 pu at 0 degrees).",
    formula:
      "Critical disruptive voltage: Vd = m0 × d × r × ln(D/r) kV\nm0 = surface factor (1 for smooth, 0.93-0.98 for stranded)\nd = air density (1 at standard conditions)\nD = conductor spacing, r = conductor radius\nPer unit: pu = actual value / base value",
    tip: "Critical voltage = point where air gives up and starts conducting. Like breaking point of insulation!",
    example:
      "Slack bus at 132kV substation: fixed at 132kV, 0°. All other bus voltages calculated from it.",
  },

  // ── EXTRA TOPICS ───────────────────────────────────────────────────────────
  {
    topic: "Extra Topics",
    question: "What is SCR? Latching current vs Holding current?",
    answer:
      "SCR (Silicon Controlled Rectifier / Thyristor): A 4-layer PNPN semiconductor device. Terminals: Anode (A), Cathode (K), Gate (G). Works like a diode but only conducts when gate pulse is applied AND anode is positive. TURNING ON: (1) Gate triggering (most common). (2) Forward voltage triggering. (3) dv/dt triggering. (4) Temperature triggering. (5) Light triggering (LASCR). LATCHING CURRENT (IL): Minimum anode current required to TURN ON the SCR from forward blocking state. Required at the moment of triggering. HOLDING CURRENT (IH): Minimum anode current to KEEP the SCR in conduction. If current falls below IH, SCR turns OFF automatically. IMPORTANT: Latching current > Holding current always.",
    formula:
      "IH < IL (Holding < Latching)\nSCR turns ON: Ia > IL (latching current)\nSCR turns OFF: Ia < IH (holding current)\nSnubber: R in series with C, parallel to SCR\ndv/dt protection by snubber circuit",
    tip: "Latching = minimum push to open a heavy door. Holding = minimum push to keep it open.",
    example: "SCRs used in: power rectifiers, motor drives, UPS systems, HVDC converters.",
  },
  {
    topic: "Extra Topics",
    question: "Which bulb glows brighter: 80W or 100W in series vs parallel?",
    answer:
      "This is a classic EE interview question! KEY INSIGHT: Higher wattage rating means LOWER resistance (at same voltage). STEP 1 - Calculate resistances (both rated for 220V): R80 = 220²/80 = 605Ω. R100 = 220²/100 = 484Ω. So 80W bulb has HIGHER resistance! IN SERIES (same current through both): P = I²×R. Higher resistance → more power dissipated. 80W bulb (R=605Ω) dissipates MORE power → GLOWS BRIGHTER in series! IN PARALLEL (same voltage across both): P = V²/R. Lower resistance → more power dissipated. 100W bulb (R=484Ω) dissipates MORE power → GLOWS BRIGHTER in parallel! SUMMARY: Series → 80W brighter. Parallel → 100W brighter (normal usage).",
    formula:
      "R = V_rated² / P_rated\nR80  = 220²/80  = 605Ω\nR100 = 220²/100 = 484Ω\nSeries:   P = I²×R → higher R → brighter → 80W wins\nParallel: P = V²/R → lower R → brighter → 100W wins",
    tip: "Remember: Series = current decides. 80W has more resistance = more P = brighter. Flip in parallel!",
    example:
      "In your home (parallel), 100W is always brighter. But connected in series, 80W wins!",
  },
  {
    topic: "Extra Topics",
    question: "What is the difference between Motor and Generator?",
    answer:
      "MOTOR: Converts electrical energy to mechanical energy. Working principle: A current-carrying conductor in a magnetic field experiences a force (Fleming's Left-Hand Rule). F = BIL (force on conductor). GENERATOR: Converts mechanical energy to electrical energy. Working principle: Electromagnetic induction. A conductor moving in a magnetic field generates EMF (Fleming's Right-Hand Rule). E = BLv (induced EMF). ALTERNATOR vs GENERATOR: In an alternator: armature is STATIONARY, field winding ROTATES. In a DC generator: armature ROTATES, field winding is STATIONARY. WHY MOTOR RATED IN KW NOT KVA? Motor is a LOAD with a fixed power factor. Its output is mechanical power in kW. Transformer is not a load - its PF depends on connected load, so rated in kVA.",
    formula:
      "Motor: F = BIL (force from current and field)\nGenerator: E = BLv (EMF from motion in field)\nFleming Left-Hand Rule: Motor (current → force)\nFleming Right-Hand Rule: Generator (motion → EMF)\nMotor rated in kW. Transformer rated in kVA.",
    tip: "Motor = uses electricity to do mechanical work. Generator = uses mechanical work to make electricity!",
    example:
      "Same machine can be motor OR generator! Synchronous machine operates as both in power systems.",
  },
  {
    topic: "Extra Topics",
    question: "What is a Motor Starter and why is it needed?",
    answer:
      "A motor starter is a device connected in series with the motor to limit the high starting current and provide protection. WHY NEEDED? At start, back EMF = 0. Starting current = V/Ra. This can be 6–8 times the rated current! HIGH STARTING CURRENT CAUSES: (1) Burning of armature due to excessive heating. (2) Damage to commutator and brushes from heavy sparking. (3) Excessive voltage drop - affecting other equipment on the same supply. TWO MAIN FUNCTIONS OF STARTER: (1) Reduce heavy starting current (limit to safe value ~1.5–2× rated). (2) Provide overload and under-voltage protection. FOR INDUCTION MOTOR: DOL (small motors), Star-Delta (medium), Autotransformer (large). FOR DC MOTOR: 3-point starter (shunt), 4-point starter (when speed control by field weakening).",
    formula:
      "At start: Ia = V/Ra (very high - no back EMF)\nWith starter (R): Ia = V/(Ra + R_start)\nStar-Delta: starting current = (1/3) × DOL current\nNVC: No Voltage Coil (undervoltage protection)\nOLC: Overcurrent Coil (overload protection)",
    tip: "Starter = speed bump for motor current. Slows down the current rush at startup!",
    example:
      "Without starter: 440A at start damages motor. With starter: limited to safe ~40A.",
  },
  {
    topic: "Extra Topics",
    question: "What is Rectifier? Types of Rectifiers?",
    answer:
      "A rectifier is an electronic circuit that converts AC (alternating current) to DC. TYPES: (1) UNCONTROLLED RECTIFIERS (using Diodes - output depends only on input): Half-wave rectifier: Converts only positive OR negative half cycle to DC. Full-wave rectifier: Converts BOTH halves to DC. Bridge rectifier: 4 diodes, converts full AC wave. Most common. Center-tap rectifier: 2 diodes + center-tap transformer. (2) CONTROLLED RECTIFIERS (using SCRs/Thyristors - output controllable): Half-controlled: Mix of SCRs and diodes. Fully-controlled: All SCRs. Output voltage controllable by changing firing angle. KEY PARAMETERS: Form Factor = RMS value / Average value. Ripple Factor = AC component / DC component. Peak Factor (Crest Factor) = Peak value / RMS value.",
    formula:
      "Half-wave: Vrms = Vm/2, Vavg = Vm/π\nFull-wave: Vrms = Vm/√2, Vavg = 2Vm/π\nRipple factor (full-wave) = 0.482\nRipple factor (half-wave) = 1.21\nForm factor = Vrms / Vavg",
    tip: "Rectifier = one-way valve for electricity. Like a check valve in plumbing - only lets AC go one way!",
    example:
      "Phone charger = bridge rectifier + filter capacitor + voltage regulator. Converts 220V AC to 5V DC.",
  },
  {
    topic: "Extra Topics",
    question: "What is Skin Effect? Why is power transmitted in 3 phases?",
    answer:
      "SKIN EFFECT: AC current crowds to the surface (skin) of conductors. Center of conductor carries less current. Effective cross-section reduces. Effective resistance > DC resistance. Increases with frequency. In DC systems: No skin effect (uniform current distribution). This is one reason HVDC is preferred for very long lines. Reduction: ACSR bundled conductors, hollow conductors, stranded conductors. WHY 3-PHASE? (1) 3-phase power delivery is CONSTANT (not pulsating like single-phase). (2) No neutral wire needed for balanced 3-phase loads → saves conductor cost. (3) Self-starting motors possible with 3-phase (rotating magnetic field). (4) More power transmitted with same conductor cross-section. WHY NOT MORE PHASES (6, 12)? 6-phase would be technically better BUT: generators, transformers, switchgear become more complex and costly. Cost-benefit analysis favors 3-phase as the optimal choice.",
    formula:
      "Skin depth: δ = √(2ρ / (ωμ))\nAt 50Hz, copper skin depth = 9.3mm\n3-phase power: P = √3 × VL × IL × cos(φ)\nSingle-phase: P = VL × IL × cos(φ)\n3-phase uses 25% less conductor material than equivalent single-phase",
    tip: "3-phase = 3 relay runners in a race, each handing baton smoothly. Power never drops to zero!",
    example:
      "Japan exception: western Japan uses 60Hz, eastern Japan uses 50Hz (historical reason).",
  },
];

// ─── Derived helpers ─────────────────────────────────────────────────────────

/** Unique list of topics in insertion order */
export const allTopics = [...new Set(qaDatabase.map((q) => q.topic))];

/** Count of questions per topic */
export const topicCounts = allTopics.reduce((acc, topic) => {
  acc[topic] = qaDatabase.filter((q) => q.topic === topic).length;
  return acc;
}, {});

/** Case-insensitive search across all fields */
export function searchQA(query) {
  if (!query.trim()) return qaDatabase;
  const q = query.toLowerCase();
  return qaDatabase.filter(
    (item) =>
      item.topic.toLowerCase().includes(q) ||
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.formula.toLowerCase().includes(q) ||
      item.tip.toLowerCase().includes(q) ||
      item.example.toLowerCase().includes(q)
  );
}

/** Filter by topic (exact match) */
export function filterByTopic(topic) {
  return topic === "All" ? qaDatabase : qaDatabase.filter((q) => q.topic === topic);
}