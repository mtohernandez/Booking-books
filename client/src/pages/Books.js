import React, {useState, useEffect} from "react";
import './books.css'

const API = process.env.REACT_APP_DISTRITO7;

export const Books = () => {

    const[id, setId] = useState("")
    const[title, setTitle] = useState("")
    const[nopages, setNopages] = useState("")
    const[category, setCategory] = useState("")
    const[authors, setAuthor] = useState("")

    const[books, setBooks] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                title,
                nopages,
                category,
                authors,
            })
        })
        const data = await res.json();
        console.log(data)
    }

    const getBooks = async () => {
        const res = await fetch(`${API}/books`)
        const data = await res.json();
        setBooks(data)
    }

    const deleteBooks = async (id) => {
        const res = await fetch(`${API}/books/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data)
    }

    useEffect(() => {
        getBooks();
    }, [])


  return (
    <div className="booked__booking">
        <div className="text"><h1>Every action made refresh the page</h1><p>Table style is still in development, sorry.</p></div> 
            <div className="booked__booking-form">
                <form onSubmit={handleSubmit} className="booked__booking-form-content">
                    <h1>Add Book</h1>
                    <div className="ic2">
                    <label>Book ID</label>
                    <div className="booked__booking-form-content-input-container">
                        <input 
                        type="text" 
                        onChange={e => setId(e.target.value)}
                        value={id}
                        className="form-control"
                        placeholder="Book ID"
                        autoFocus/>
                    </div>
                    </div>
                    <div className="ic2">
                    <label className="mt-2">Title</label>
                    <div className="booked__booking-form-content-input-container">
                        <input 
                        type="text" 
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        className="form-control"
                        placeholder="Title"
                        />
                    </div>
                    </div>
                    <div className="ic2">
                    <label>No. Pages</label>
                    <div className="booked__booking-form-content-input-container">
                        <input 
                        type="number" 
                        onChange={e => setNopages(e.target.value)}
                        value={nopages}
                        className="form-control"
                        placeholder="No. Pages"
                        />
                    </div>
                    </div>
                    <div className="ic2">
                    <label className="mt-2">Category</label>
                    <div>
                        <select className="booked__booking-form-content-select"onChange={e => setCategory(e.target.value)}>
                            <option selected disabled>Category:</option>
                            <option value="horror">Horror</option>
                            <option value="suspense">Suspense</option>
                            <option value="science-fiction">Sci-fi</option>
                            <option value="psicological">Psicological</option>
                            <option value="action">Action</option>
                            <option value="romance">Romance</option>
                        </select>
                    </div>
                    </div>
                    <div className="ic2">
                    <label className="mt-2">Authors</label>
                    <div className="booked__booking-form-content-input-container">
                        <input 
                        type="text" 
                        onChange={e => setAuthor(e.target.value)}
                        value={authors}
                        className="form-control"
                        placeholder="Authors"
                        />
                    </div>
                    </div>
                    <button className="booked__booking-form-content-button">
                        Create
                    </button>
                </form>
            </div>
            <div>
                <table className="booked__table" border="">
                    <thead className="booked_table-head">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>No. Pages</th>
                            <th>Category</th>
                            <th>Authors</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody className="booked_table-body">
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.nopages}</td>
                            <td>{book.category}</td>
                            <td>{book.authors}</td>
                            <td>
                                <div>
                                <button 
                                className="booked__booking-form-content-button"
                                onClick={() => deleteBooks(book.id)}
                                >
                                Delete
                                </button>
                                </div>
                                
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>

            </div>

        </div>
  )
}

export default Books