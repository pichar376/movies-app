import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MoviesContext, { MoviesProvider } from "../../context/MoviesContext";

const useMovieCard = () => {

  const { addToList, addAndDeleteMovie } = useContext(MoviesContext);
  const navigate = useNavigate();
  const goDescription = (id) => {
    navigate(`/description/${id}`)
  }
  const validation = (movieID) => {
    const entries = Object.entries(addToList);

    const id = movieID.toString();

    const result = entries.filter((entry) => entry[0] === id);


    if (result.length > 0) {
      if (result[0][1] === undefined) {
        return undefined;
      }
      if (result[0][1]) {
        return true;
      }
    } else {
      return null;
    }
  };

  const addToMyList = (movieID) => {
    const result = validation(movieID);

    addAndDeleteMovie(movieID, result)
  };

  const location = useLocation();
  const deleteMovie = (movieId) => {
    if (location.pathname === "/") {
      addToMyList(movieId)
    } else if (location.pathname === "/favorite-list") {
      movieToDelete(movieId)
    }

  }
  const movieToDelete = (idToDelete) => {

    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "Once deleted, it will disappear from your favorites list",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // }).then((willDelete) => {
    //   if (willDelete) {
    //     addToMyList(idToDelete);
    //   } else {
    //     Swal("Your movie is safe! ☺");
    //   }
    // });
    Swal.fire({
      title: 'press to delete movie ',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'delete',
      denyButtonText: `do not delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
        addToMyList(idToDelete);
      } else if (result.isDenied) {
        Swal.fire("The movie has not been deleted")
      }
    })
  }
  return {
    addToMyList,
    goDescription,
    deleteMovie,
    movieToDelete,

  }
}

export default useMovieCard;

















