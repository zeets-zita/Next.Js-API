
import Link from 'next/link';
import Layout from '../components/MyLayout'


const countries = [
  {name: 'Afghanistan', id: 1},
  {name: 'Armenia', id: 2},
  {name: 'Azerbaijan', id: 4},
  {name: 'Bahrain', id: 5},
  {name: 'Bangladesh', id: 6},
  {name: 'Bhutan', id: 7},
  {name: 'Brunei ', id: 8},
  {name: 'Cambodia', id: 9},
  {name: 'China', id: 10},
  {name: 'Georgia', id: 11},
  {name: 'Hong Kong', id: 12},
  {name: 'India', id: 13},
  {name: 'Indonesia', id: 14},
  {name: 'Iran', id: 15},
  {name: 'Iraq', id: 16},
  {name: 'Israel', id: 17},
  {name: 'Japan', id: 18},
  {name: 'Jordan', id: 19},
  {name: 'Kazakhstan', id: 20},
  {name: 'Kuwait', id: 21},
  {name: 'Kyrgyzstan', id: 22},
  {name: 'Loa', id: 23},
  {name: 'Malaysia', id: 24},
  {name: 'Maldives', id: 25},
  {name: 'Mongolia', id: 26},
  {name: 'Myanmar', id: 27},
  {name: 'Nepal', id: 28},
  {name: 'Korea', id: 29},
  {name: 'Oman', id: 30},
  {name: 'Pakistan', id: 31},
  {name: 'Palestine', id: 32},
  {name: 'Philippines', id: 33},
  {name: 'Qatar', id: 34},
  {name: 'Russia', id: 35},
  {name: 'Saudi Arabia', id: 36},
  {name: 'Singapore', id: 37},
  {name: 'Korea(Republic of)', id: 38},
  {name: 'Sri Lanka', id: 39},
  {name: 'Syria', id: 40},
  {name: 'Taiwan', id: 41},
  {name: 'Tajikistan', id: 42},
  {name: 'Thailand', id: 43},
  {name: 'Timor-Leste', id: 44},
  {name: 'Turkey', id: 45},
  {name: 'Turkmenistan', id: 46},
  {name: 'United Arab Emirates', id: 47},
  {name: 'Uzbekistan', id: 48},
  {name: 'Vietnam', id: 49},
  {name: 'Yemen', id: 50}
]

const Index = () => (
  <Layout>
    <h1>Countries:</h1>
  <ul>
    {countries.map(({name, id}) => (
      <li key={id}>
        <Link as={`/post/${name}`} href={`/post?id=${name}`}>
          <a>{name}</a>
        </Link>
      </li>
    ))}
  </ul>
  <style jsx>{`

li {
  list-style: none;
  margin: 8px 0;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  opacity: 0.6;
}
`}</style>
</Layout>
)


export default Index