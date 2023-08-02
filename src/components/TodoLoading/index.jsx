import './styles.css';

function TodoLoading() {
  return (
    <ul className='todoLoadingList'>
      <li className='todoLoadingItem pulsate'></li>
      <li className='todoLoadingItem pulsate'></li>
      <li className='todoLoadingItem pulsate'></li>
      <li className='todoLoadingItem pulsate'></li>
      <li className='todoLoadingItem pulsate'></li>
      <li className='todoLoadingItem pulsate'></li>
      <li className='todoLoadingItem pulsate'></li>
    </ul>
  );
}

export { TodoLoading };