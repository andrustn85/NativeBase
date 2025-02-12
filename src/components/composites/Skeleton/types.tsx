import type { MutableRefObject } from 'react';
import type { IBoxProps, ITextProps } from '../../primitives';
import type { IStackProps } from '../../primitives/Stack/Stack';
export interface ISkeletonProps extends IBoxProps {
  /**
   * The fadeIn duration in seconds
   */
  fadeDuration?: number;
  /**
   * If true, it'll render its children
   */
  isLoaded?: boolean;
  /**
   * The animation speed in seconds
   */
  speed?: number;
  /**
   * The color at the animation start
   */
  startColor?: string;
  /**
   * The color at the animation end
   */
  endColor?: string;
  /**
   * Sizes for Skeleton
   */
  size?: string | number;
}

export interface ISkeletonTextProps extends ITextProps {
  /**
   * The fadeIn duration in seconds
   */
  fadeDuration?: number;
  /**
   * If true, it'll render its children
   */
  isLoaded?: boolean;
  /**
   * The animation speed in seconds
   */
  speed?: number;
  /**
   * The color at the animation start
   */
  startColor?: string;
  /**
   * The color at the animation end
   */
  endColor?: string;
  /**
   * No of Lines in text
   */
  noOfLines?: number;
  /**
   * Space between two lines
   */
  space?: number | string;
  /**
   * VStack props
   */
  _stack?: IStackProps;
}

export type ISkeletonComponentType = ((
  props: ISkeletonProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Circle: React.MemoExoticComponent<
    (props: ISkeletonProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Text: React.MemoExoticComponent<
    (props: ISkeletonTextProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};
