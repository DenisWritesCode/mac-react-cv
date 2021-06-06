import React from 'react';

import RenderCompetencies from './CVRender/RenderCompetencies';
import RenderContact from './CVRender/RenderContact';
import RenderEducation from './CVRender/RenderEducation';
import RenderInterests from './CVRender/RenderInterests';
import RenderWork from './CVRender/RenderWork';

export default function CVRender({seeContact, seeCompetencies, seeEducation, seeInterests, seeWork, contact}) {
    return (
        <div>
            <RenderContact seeContact={seeContact} contact={contact} />
            <RenderEducation seeEducation={seeEducation} />
            <RenderWork seeWork={seeWork} />
            <RenderCompetencies seeCompetencies={seeCompetencies} />
            <RenderInterests seeInterests={seeInterests} />
        </div>
    )
}
