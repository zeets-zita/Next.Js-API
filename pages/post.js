import {withRouter} from 'next/router'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'




const Post = withRouter((props) => (
  <Layout>
    <div>
      <h1>{props.data[0].name}</h1>
      <p>{props.data[0].capital}</p>
      <p>{props.data[0].reigon}</p>
      <p>{props.data[0].population}</p>
      <p>{props.data[0].nativeName}</p>
      <p>{props.data[0].currencies[0].name}</p>
      <img width={150} src={props.data[0].flag} />
    </div>
  </Layout>
))


Post.getInitialProps = async function(context) {
  const {id} = context.query;
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
  const data = await res.json();
  return { data }
}

export default Post;
