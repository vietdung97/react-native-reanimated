import type {
  PerpectiveTransform,
  RotateTransform,
  RotateXTransform,
  RotateYTransform,
  RotateZTransform,
  ScaleTransform,
  ScaleXTransform,
  ScaleYTransform,
  TranslateXTransform,
  TranslateYTransform,
  SkewXTransform,
  SkewYTransform,
  MatrixTransform,
  ViewStyle,
  TextStyle,
} from 'react-native';

export type TransformProperty =
  | PerpectiveTransform
  | RotateTransform
  | RotateXTransform
  | RotateYTransform
  | RotateZTransform
  | ScaleTransform
  | ScaleXTransform
  | ScaleYTransform
  | TranslateXTransform
  | TranslateYTransform
  | SkewXTransform
  | SkewYTransform
  | MatrixTransform;

export interface StyleProps extends ViewStyle, TextStyle {
  originX?: number;
  originY?: number;
  [key: string]: any;
}

export interface AnimatedStyle extends Record<string, AnimationObject> {
  [key: string]: any;
  transform?: Array<
    | Record<'matrix', number[] | AnimationObject>
    | Partial<
        Record<
          | 'perspective'
          | 'scale'
          | 'scaleX'
          | 'scaleY'
          | 'translateX'
          | 'translateY',
          number | AnimationObject
        >
      >
    | Partial<
        Record<
          'rotate' | 'rotateX' | 'rotateY' | 'rotateZ' | 'skewX' | 'skewY',
          string | AnimationObject
        >
      >
    | Record<string, AnimationObject>
  >;
}

export interface SharedValue<T> {
  value: T;
  addListener: (listenerID: number, listener: (value: T) => void) => void;
  removeListener: (listenerID: number) => void;
  modify: (modifier: (value: T) => T) => void;
}

// The below type is used for HostObjects retured by the JSI API that don't have
// any accessable fields or methods but can carry data that is accessed from the
// c++ side. We add a field to the type to make it possible for typescript to recognize
// which JSI methods accept those types as arguments and to be able to correctly type
// check other methods that may use them. However, this field is not actually defined
// nor should be used for anything else as assigning any data to those objects will
// throw an error.
export type ShareableRef<T> = {
  __hostObjectShareableJSRef: T;
};

export type ShareableSyncDataHolderRef<T> = {
  __hostObjectShareableJSRefSyncDataHolder: T;
};

export type MapperRegistry = {
  start: (
    mapperID: number,
    worklet: () => void,
    inputs: SharedValue<any>[],
    outputs?: SharedValue<any>[]
  ) => void;
  stop: (mapperID: number) => void;
};

export type WorkletClosure = Record<string, unknown>;

interface ReleaseInitData {
  code: string;
}

interface DevInitData {
  code: string;
  location: string;
  sourceMap: string;
  version: string;
}
interface ReleaseWorkletBase {
  _closure: WorkletClosure;
  __initData: ReleaseInitData;
  __workletHash: number;
}

interface DevWorkletBase {
  _closure: WorkletClosure;
  __initData: DevInitData;
  __workletHash: number;
  __stackDetails: Error;
}

// A stands for Arguments, R stands for Return value

type ReleaseWorkletFunction<A extends unknown[], R> = ReleaseWorkletBase & {
  (...args: A): R;
};

type DevWorkletFunction<A extends unknown[], R> = DevWorkletBase & {
  (...args: A): R;
};

export type WorkletFunction<A extends unknown[], T> =
  | ReleaseWorkletFunction<A, T>
  | DevWorkletFunction<A, T>;

export type __Context = Record<string, unknown>;
export interface __WorkletFunction {
  _closure?: __Context;
  __workletHash?: number;
}

export interface __BasicWorkletFunction<T> extends __WorkletFunction {
  (): T;
}

export interface __BasicWorkletFunctionOptional<T> extends __WorkletFunction {
  (): Partial<T>;
}

export interface __ComplexWorkletFunction<A extends any[], R>
  extends __WorkletFunction {
  (...args: A): R;
  __remoteFunction?: (...args: A) => R;
}
export interface __AdapterWorkletFunction extends __WorkletFunction {
  (value: NestedObject<string | number | AnimationObject>): void;
}

export interface NativeEvent<T> {
  nativeEvent: T;
}

export interface NestedObject<T> {
  [key: string]: NestedObjectValues<T>;
}

export type NestedObjectValues<T> =
  | T
  | Array<NestedObjectValues<T>>
  | NestedObject<T>;

type Animatable = number | string | Array<number>;

export type AnimatableValueObject = { [key: string]: Animatable };

export type AnimatableValue = Animatable | AnimatableValueObject;

export interface AnimationObject {
  [key: string]: any;
  callback?: AnimationCallback;
  current?: AnimatableValue;
  toValue?: AnimationObject['current'];
  startValue?: AnimationObject['current'];
  finished?: boolean;
  strippedCurrent?: number;
  cancelled?: boolean;

  __prefix?: string;
  __suffix?: string;
  onFrame: (animation: any, timestamp: Timestamp) => boolean;
  onStart: (
    nextAnimation: any,
    current: any,
    timestamp: Timestamp,
    previousAnimation: any
  ) => void;
}

export interface Animation<T extends AnimationObject> extends AnimationObject {
  onFrame: (animation: T, timestamp: Timestamp) => boolean;
  onStart: (
    nextAnimation: T,
    current: AnimatableValue,
    timestamp: Timestamp,
    previousAnimation: Animation<any> | null | T
  ) => void;
}

export enum SensorType {
  ACCELEROMETER = 1,
  GYROSCOPE = 2,
  GRAVITY = 3,
  MAGNETIC_FIELD = 4,
  ROTATION = 5,
}
export enum IOSReferenceFrame {
  XArbitraryZVertical,
  XArbitraryCorrectedZVertical,
  XMagneticNorthZVertical,
  XTrueNorthZVertical,
  Auto,
}

export type SensorConfig = {
  interval: number | 'auto';
  adjustToInterfaceOrientation: boolean;
  iosReferenceFrame: IOSReferenceFrame;
};

export type AnimatedSensor<T extends Value3D | ValueRotation> = {
  sensor: SharedValue<T>;
  unregister: () => void;
  isAvailable: boolean;
  config: SensorConfig;
};

export interface NumericAnimation {
  current?: number;
}

export type AnimationCallback = (
  finished?: boolean,
  current?: AnimatableValue
) => void;

export type Timestamp = number;

export type Value3D = {
  x: number;
  y: number;
  z: number;
  interfaceOrientation: InterfaceOrientation;
};

export type ValueRotation = {
  qw: number;
  qx: number;
  qy: number;
  qz: number;
  yaw: number;
  pitch: number;
  roll: number;
  interfaceOrientation: InterfaceOrientation;
};

export enum InterfaceOrientation {
  ROTATION_0 = 0,
  ROTATION_90 = 90,
  ROTATION_180 = 180,
  ROTATION_270 = 270,
}

export type ShadowNodeWrapper = object;

export enum KeyboardState {
  UNKNOWN = 0,
  OPENING = 1,
  OPEN = 2,
  CLOSING = 3,
  CLOSED = 4,
}

export type AnimatedKeyboardInfo = {
  height: SharedValue<number>;
  state: SharedValue<KeyboardState>;
};

export interface MeasuredDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
  pageX: number;
  pageY: number;
}

export interface AnimatedKeyboardOptions {
  isStatusBarTranslucentAndroid?: boolean;
}
