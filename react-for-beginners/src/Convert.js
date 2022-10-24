function Convert(props) {
    const [onChange, value, flipped, reset, onFlip, index] = [props.onChange, props.value, props.disabled, props.onReset, props.onFlip, props.index];
    let convertValue1, convertValue2;
    if(index === "0")
    {
      convertValue1 = Math.round(value * 60);
      convertValue2 = Math.round(value / 60);
    }
    else if(index === "1")
    {
      convertValue1 = value * 1.609;
      convertValue2 = value * 0.621;
    }
    return (
      <div>
        <div>
          <label htmlFor='minutes'>Minutes</label>
          <input id='minutes' placeholder='Minutes' type="number" onChange={onChange} value={(!flipped) ? value : convertValue1} disabled={flipped === true}></input>
        </div>
        <h4>You want to convert {value}</h4>
        <div>
          <label htmlFor='hours'>Hours</label>
          <input id='hours' placeholder='Hours' type="number" onChange={onChange} value={flipped ? value : convertValue2} disabled={flipped === false}></input>
        </div>
        <div>
          <button onClick={reset}>RESET</button>
          <button onClick={onFlip}>Flip</button>
        </div>
      </div>
    );
  }

  export default Convert;