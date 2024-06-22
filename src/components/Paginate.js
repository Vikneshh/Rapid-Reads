// Responsible for pagination numbers generation adnd navigation
const Paginate = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (number) => {
    paginate(number);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${
                currentPage === number ? "active" : ""
              } p-2`}
            >
              <a
                href="!#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageClick(number);
                }}
                className="page-link m-2 "
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
