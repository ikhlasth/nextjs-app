import Head from 'next/head'
import Image from 'next/image'
import RestaurantList from '../components/RestaurantList';

export default function Home({restaurants}) {
  return (
    <div>
      <RestaurantList restaurants={restaurants}/>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list', {
    headers: {
      'User-Agent': 'Mozilla/5.0', // spoof agar tidak dianggap bot
      'Accept': 'application/json',
    },
  });
  const { restaurants } = await response.json();
  
  return {
    props:{restaurants},
  }
}