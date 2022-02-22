import { useState, useEffect } from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters shadow container">
        <form>
            <div className="field">
                <label>Filter category</label>
                <select
                    value={ filter }
                    onChange={ e => setFilter(e.target.value) }
                >
                    <option value="">-- Select --</option>
                    <option value="savings">Savings</option>
                    <option value="food">Food</option>
                    <option value="house">House</option>
                    <option value="leisure">Leisure</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </form>
    </div>
  );
}

export default Filters;
