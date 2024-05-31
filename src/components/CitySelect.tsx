import { cityList } from './cityList';

export default function CitySelect() {
  return (
    <div className='labelInput'>
      <label htmlFor='select'>City Adress:</label>
      <select id='select'>
        {cityList.map((city: string, index: number) => (
          <option className='option' value={city} key={index}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
