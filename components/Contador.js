"use client";

import { useState, useEffect } from "react";

export default function Contador({
  inicial = 0,
  minimoInicial = 0,
  maximoInicial = 10,
  stepInicial = 1,
}) {
  const [contador, setContador] = useState(inicial);
  const [step, setStep] = useState(stepInicial);
  const [min, setMin] = useState(minimoInicial);
  const [max, setMax] = useState(maximoInicial);

  // Validação: se os limites mudarem, o contador é ajustado automaticamente
  useEffect(() => {
    setContador((atual) => Math.min(Math.max(atual, min), max));
  }, [min, max]);

  function incrementar() {
    setContador((c) => Math.min(c + step, max));
  }

  function decrementar() {
    setContador((c) => Math.max(c - step, min));
  }

  function resetar() {
    setContador(Math.min(Math.max(0, min), max));
  }

  function mudarStep(e) {
    const v = Number(e.target.value);
    if (Number.isNaN(v)) return;
    setStep(v > 0 ? v : 1); // step precisa ser > 0
  }

  function mudarMin(e) {
    const v = Number(e.target.value);
    if (Number.isNaN(v)) return;
    setMin(v);
    if (v > max) setMax(v); // mantém mín ≤ máx
  }

  function mudarMax(e) {
    const v = Number(e.target.value);
    if (Number.isNaN(v)) return;
    setMax(v);
    if (v < min) setMin(v); // mantém mín ≤ máx
  }

  return (
    <div className="contador">
      <div className="contador-valor">{contador}</div>

      <div className="contador-botoes">
        <button className="btn" onClick={decrementar} disabled={contador <= min}>- Diminuir</button>
        <button className="btn" onClick={resetar}>Resetar</button>
        <button className="btn" onClick={incrementar} disabled={contador >= max}>+ Aumentar</button>
      </div>

      <div className="contador-campos">
        <label className="campo">
          Step
          <input type="number" min="1" value={step} onChange={mudarStep} />
        </label>
        <label className="campo">
          Mínimo
          <input type="number" value={min} onChange={mudarMin} />
        </label>
        <label className="campo">
          Máximo
          <input type="number" value={max} onChange={mudarMax} />
        </label>
      </div>
    </div>
  );
}
