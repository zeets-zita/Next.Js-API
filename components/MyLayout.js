import Header from './Header'

const layoutStyle = {
  backgroundImage: "url('../static/image.jpg') ",
  backgroundRepeat: 'no-repeat, repeat',
  backgroundSize: '1300px',
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  fontFamily: 'Century Gothic',
  letterSpacing: '2px', 
  color: 'white',
  fontSize: '22px'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
