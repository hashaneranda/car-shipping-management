import React, { FC, forwardRef, useState } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';

interface IGridRenderer {
  renderItem: any;
  dataLength: number;
  overscan: number;
  data: any;
  endReached: any;
}

const GridRenderer: React.FC<IGridRenderer> = ({ renderItem: RenderItem, dataLength, overscan, data, endReached }) => {
  // Define the interface for Item props
  interface ItemProps {
    children: React.ReactNode;
  }

  // Define the Item component with props
  const Item: React.FC<ItemProps> = ({ children, ...props }) => <div {...props}>{children}</div>;

  // Define the interface for List props, including the ref prop
  interface ListProps extends React.HTMLProps<HTMLDivElement> {
    style?: React.CSSProperties;
    ref?: React.Ref<HTMLDivElement>; // Added the ref prop
  }

  // Define the List component with forwarded ref and props
  // eslint-disable-next-line react/display-name
  const List = React.forwardRef<HTMLDivElement, ListProps>(({ style, children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className='flex flex-row flex-wrap gap-8'
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        ...style,
      }}
    >
      {children}
    </div>
  ));

  // Define the interface for grid components
  interface GridComponents {
    List: React.FC<ListProps>;
    Item: any; // Change the type to FC<ItemProps>
  }

  const gridComponents: GridComponents | any = {
    List,
    Item,
  };

  return (
    <div className='w-100 h-[100vh]'>
      <VirtuosoGrid
        data={data}
        endReached={endReached}
        overscan={overscan}
        totalCount={dataLength}
        components={gridComponents}
        itemContent={index => <RenderItem index={index} />}
      />
    </div>
  );
};

export default GridRenderer;
