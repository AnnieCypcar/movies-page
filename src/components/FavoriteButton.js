import React, { Component } from 'react';

class FavoriteButton extends Component {
    constructor(props) {
        super(props);

        this.favoriteRef = React.createRef();
    }
    componentDidMount() {
        const ctx = this.favoriteRef.current.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fillStyle = this.props.isFavorite ? 'red' : 'blue';
        ctx.fill();

    }
    componentDidUpdate() {
        const ctx = this.favoriteRef.current.getContext('2d');
        ctx.fillStyle = this.props.isFavorite ? 'red' : 'blue';
        ctx.fill();
    }
    render() {
        return (
            <div className='favorite-button'>
                <canvas ref={this.favoriteRef} data-testid='canvas' onClick={this.props.handleFavorite} />
            </div>
        )
    }
}
export default FavoriteButton;