import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from '../../imports/ui/layouts/App.jsx';
import EventsContainer from '../../imports/ui/containers/EventsContainer.jsx';
import OneEventContainer from '../../imports/ui/containers/OneEventContainer.jsx';

const publicRoutes = FlowRouter.group( { name: 'public' } );
  
publicRoutes.route('/', {
    name: 'home',
    action() {
        ReactLayout.render(App, {yield: <EventsContainer />});
    }
});

publicRoutes.route('/event/:eventId', {
    name: 'event',
    action(params) {
        ReactLayout.render(App, {yield: <OneEventContainer {...params} />});
    }
});
        
FlowRouter.notFound = {
    action: function() {
        ReactLayout.render(App, {yield: <EventsContainer />});
    }
};
    
