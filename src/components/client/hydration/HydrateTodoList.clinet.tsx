'use client';

import { Hydrate as RQHydrate, HydrateProps } from '@tanstack/react-query';

function HydrateTodoList(props: HydrateProps) {
  return <RQHydrate {...props} />;
}

export default HydrateTodoList;
