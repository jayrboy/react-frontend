/* eslint-disable */
import './products.css'

const Product = () => {
  const data = [
    ['React', 500],
    ['React Native', 650],
    ['Node.js', 450],
    ['MongoDB', 300],
    ['Express.js', 650],
  ]
  return (
    <table border="1">
      <tr>
        <th>ชื่อ</th>
        <th>ราคา</th>
      </tr>
      {data.map((d, i) => {
        return (
          <tr key={i}>
            <td>{d[0]}</td>
            <td>{d[1]}</td>
          </tr>
        )
      })}
    </table>
  )
}
export default Product
