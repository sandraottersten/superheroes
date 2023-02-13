interface Props {
  currentPage: number
  cardsPerPage: number
  totalCards: number
  paginate: (number: number) => void
}

const Pagination = ({
  currentPage,
  cardsPerPage,
  totalCards,
  paginate,
}: Props) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul className="flex">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`flex justify-center items-center w-8 h-8 border border-dark hover:bg-beige ${
                currentPage === number && 'bg-orange'
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
