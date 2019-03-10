import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, 
        SvgIcons, SvgMaterialIcons, FontMaterialIcons, FontAweSome, 
        Types, 
        Links, ButtonLink, 
        GutterGrid, CenteredGrid, FullWidthGrid, InterativeGrid, AutoGrid, ComplexGrid
        } from 'pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/svgicons" component={SvgIcons}/>
                <Route path="/svgmaterialicons" component={SvgMaterialIcons}/>
                <Route path="/fontmaterialicons" component={FontMaterialIcons}/>
                <Route path="/fontawesome" component={FontAweSome}/>
                <Route path="/types" component={Types}/>
                {/*<Route path="/deprectedtypes" component={DeprecatedTypes}/>*/}
                <Route path="/links" component={Links}/>
                <Route path="/buttonlink" component={ButtonLink}/>
                <Route path="/guttergrid" component={GutterGrid}/>
                <Route path="/centerdgrid" component={CenteredGrid}/>
                <Route path="/fullwidthgrid" component={FullWidthGrid}/>
                <Route path="/interativegrid" component={InterativeGrid}/>
                <Route path="/autogrid" component={AutoGrid}/>
                <Route path="/complexgrid" component={ComplexGrid}/>
            </div>
        );
    }
}

export default App;