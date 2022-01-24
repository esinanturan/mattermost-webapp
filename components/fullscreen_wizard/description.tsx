// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import './description.scss';

type Props = {
    children: React.ReactNode | React.ReactNodeArray;
}

export default function Title(props: Props) {
    return <p className="AdminOnboardingDescription">
        {props.children} 
    </p>
}