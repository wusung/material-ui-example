import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';

import AutoGrid from './layout/grid/AutoGrid';
import AutoGridNoWrap from './layout/grid/AutoGridNoWrap';
import CSSGrid from './layout/grid/CSSGrid';
import CenteredGrid from './layout/grid/CenteredGrid';
import ComplexGrid from './layout/grid/ComplexGrid';
import FontAwesome from './FontAwesome';
import FullWithGrid from './layout/grid/FullWidthGrid';
import GuttersGrid from './layout/grid/GuttersGrid';
import InteractiveGrid from './layout/grid/InteractiveGrid';
import Icons from './Icons';
import MediaQuery from './layout/breakpoints/MediaQuery';
import NestedGrid from './layout/grid/NestedGrid';
import RenderPropsWithWidth from './layout/breakpoints/RenderPropsWithWidth';
import SimpleMediaQuery from './layout/use-media-query/SimpleMediaQuery';
import StarIcon from './StarIcon';
import SvgMaterialIcons from "./SvgMaterialIcons";
import SvgIcons from './SvgIcons';
import TypographyTheme from './style/typegraphy/TypographyTheme';
import WithWidth from './layout/breakpoints/WithWidth';

import ThemeHelper from './layout/use-media-query/ThemeHelper';
import ServerSide from './layout/use-media-query/ServerSide';
import UseWidth from "./layout/use-media-query/UseWidth";
import BreakpointUp from "./layout/hidden/BreakpointUp";
import BreakpointDown from "./layout/hidden/BreakpointDown";
import BreakpointOnly from "./layout/hidden/BreakpointOnly";
import GridIntegration from "./layout/hidden/GridIntegration";

import SimpleModal from './utils/modal/SimpleModal';
import SimpleCollapse from "./utils/transitions/SimpleCollapse";
import SimpleFade from "./utils/transitions/SimpleFade";
import SimpleGrow from "./utils/transitions/SimpleGrow";
import SimpleSlide from "./utils/transitions/SimpleSlide";
import SimpleZoom from "./utils/transitions/SimpleZoom";
import SimplePopover from "./utils/popover/SimplePopover";
import AnchorPlayground from "./utils/popover/AnchorPlayground";
import MouseOverPopover from "./utils/popover/MouseOverPopover";
import RenderPropsPopover from "./utils/popover/RenderPropsPopover";
import PopoverPopupState from "./utils/popover/PopoverPopupState";
import SimplePopper from "./utils/popper/SimplePopper";
import MinimalPopper from './utils/popper/MinimalPopper';
import PositionedPopper from './utils/popper/PositionedPopper';
import NoTransitionPopper from './utils/popper/NoTransitionPopper';
import FakedReferencePopper from './utils/popper/FakedReferencePopper';
import RenderPropsPopper from "./utils/popper/RenderPropsPopper";
import PopperPopupState from './utils/popper/PopperPopupState';

class App extends Component {
  render() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <StarIcon />
            </Grid>
            <Grid item xs={12}>
                <SvgMaterialIcons />
            </Grid>
            <Grid item xs={12}>
                <SvgIcons />
            </Grid>
            <Grid item xs={12}>
                <Icons />
            </Grid>
            <Grid item xs={12}>
                <FontAwesome />
            </Grid>
            <Grid item xs={12}>
                <TypographyTheme />
            </Grid>
            <Grid item xs={12}>
                <GuttersGrid />
            </Grid>
            <Grid item xs={12}>
                <CenteredGrid />
            </Grid>
            <Grid item xs={12}>
                <FullWithGrid />
            </Grid>
            <Grid item xs={12}>
                <InteractiveGrid />
            </Grid>
            <Grid item xs={12}>
                <AutoGrid />
            </Grid>
            <Grid item xs={12}>
                <ComplexGrid />
            </Grid>
            <Grid item xs={12}>
                <CSSGrid />
            </Grid>
            <Grid item xs={12}>
                <NestedGrid />
            </Grid>
            <Grid item xs={12}>
                <AutoGridNoWrap />
            </Grid>
            <Grid item xs={12}>
                <MediaQuery />
            </Grid>
            <Grid item xs={12}>
                <WithWidth />
            </Grid>
            <Grid item xs={12}>
                <RenderPropsWithWidth />
            </Grid>
            <Grid item xs={12}>
                <SimpleMediaQuery />
            </Grid>
            <Grid item xs={12}>
                <ThemeHelper />
            </Grid>
            <Grid item xs={12}>
                <ServerSide />
            </Grid>
            <Grid item xs={12}>
                <UseWidth/>
            </Grid>
            <Grid item xs={12}>
                <BreakpointUp/>
            </Grid>
            <Grid item xs={12}>
                <BreakpointDown />
            </Grid>
            <Grid item xs={12}>
                <BreakpointOnly />
            </Grid>
            <Grid item xs={12}>
                <GridIntegration />
            </Grid>
            <Grid item xs={12}>
                <SimpleModal />
            </Grid>
            <Grid item xs={12}>
                <SimpleCollapse />
            </Grid>
            <Grid item xs={12}>
                <SimpleFade />
            </Grid>
            <Grid item xs={12}>
                <SimpleGrow />
            </Grid>
            <Grid item xs={12}>
                <SimpleSlide />
            </Grid>
            <Grid item xs={12}>
                <SimpleZoom />
            </Grid>
            <Grid item xs={12}>
                <SimplePopover />
            </Grid>
            <Grid item xs={12}>
                <MouseOverPopover />
            </Grid>
            <Grid item xs={12}>
                <AnchorPlayground />
            </Grid>
            <Grid item xs={12}>
                <PopoverPopupState />
            </Grid>
            <Grid item xs={12}>
                <SimplePopper />
            </Grid>
            <Grid item xs={12}>
                <MinimalPopper />
            </Grid>
            <Grid item xs={12}>
                <PositionedPopper />
            </Grid>
            <Grid item xs={12}>
                <NoTransitionPopper />
            </Grid>
            <Grid item xs={12}>
                <FakedReferencePopper />
            </Grid>
            <Grid item xs={12}>
                <RenderPropsPopover />
            </Grid>
            <Grid item xs={12}>
                <PopoverPopupState />
            </Grid>
            <Grid item xs={12}>
                <SimplePopper />
            </Grid>
            <Grid item xs={12}>
                <RenderPropsPopper />
            </Grid>
            <Grid item xs={12}>
                <PopperPopupState />
            </Grid>
        </Grid>
    );
  }
}

export default App;
