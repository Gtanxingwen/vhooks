interface Goods {
  id: string
  name: string
  price: string
  image: string
}

const goodsMap: Record<string, Goods> = {}
const goodsList: Goods[] = [
  {
    id: '0',
    name: '苹果',
    price: '100',
    image: ''
  },
  {
    id: '1',
    name: '橘子',
    price: '20',
    image: ''
  }
]

goodsList.forEach((goods) => {
  console.log(goods.name)
  goodsMap[goods.name] = goods
})

console.log(goodsMap)
