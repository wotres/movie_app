import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    componentWillMount() {
        console.log("will mount")
    }

    state ={
    }

    componentDidMount() {
        this._getMovies();
        // setTimeout(() =>{
        //     this.setState({
        //         greeting: 'Hello!',
        //             movies:[
        //             {
        //                 title: "Matrix",
        //                 poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
        //             },
        //             {
        //                 title: "Full Metal Jacket",
        //                 poster: "https://resizing.flixster.com/LtoVIF3TxiP3c9wtzPscteMXqG4=/206x305/v1.bTsxMTE2ODAyOTtqOzE3Njc5OzEyMDA7ODAwOzEyMDA"
        //             },
        //             {
        //                 title: "Oldboy",
        //                 poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
        //             },
        //             {
        //                 title: "Star Wars",
        //                 poster: "https://uproxx.files.wordpress.com/2018/02/star-wars-phasma.jpg?quality=95&w=650"
        //             },
        //             {
        //                 title:"Traninsportting",
        //                 poster:"https://uproxx.files.wordpress.com/2018/02/star-wars-phasma.jpg?quality=95&w=650"
        //             }
        //         ]
        //     })
        // },5000)
        //state�� �����ϸ� render�� �۵�
        // setTimeout(()=>{
        //     this.setState({
        //         greeting : 'agin'
        //     })
        // },5000)
        // console.log("did mount")
        //
        // setTimeout(() => {
        //     this.setState({
        //         movies: [
        //             // �Ʒ� ... �� ���� ��ȭ �״�� �ΰ� �߰��϶�� �ǹ�
        //             ...this.state.movies,
        //
        //         ]
        //     })
        // },5000)
    }

    _renderMovies = () => {
        const movies = this.state.movies.map(movie => {
            return (
                <Movie
                    title={movie.title_english}
                    poster={movie.medium_cover_image}
                    key={movie.id}
                    genres={movie.genres}
                    synopsis={movie.synopsis}
                />
            );
        });
        return movies;
    };

    _getMovies = async () => {
        const movies = await this._callApi();
        this.setState({
            movies
        });
    };

    _callApi = () => {
        return fetch(
            "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
        )
            .then(potato => potato.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err));
    };

    render() {
        const { movies } = this.state;
        return (
            <div className={movies ? "App" : "App--loading"}>
                {movies ? this._renderMovies() : "Loading"}
                {/*{this.state.greeting}*/}
                {/*{this.state.movies.map((movie, index) => {*/}
                    {/*return <Movie title={movie.title} poster={movie.poster} key={index}/>*/}
                {/*})}*/} 
            </div>
        );
    }
}

export default App;