import {
  ClassConstructor,
  ClassTransformOptions,
  plainToInstance,
} from 'class-transformer';

const classTransformOptions: ClassTransformOptions = {
  enableImplicitConversion: true, // 정의된 속성 유형으로 암시적 형변환
  exposeUnsetFields: false, // undefined 속성 제거
  excludeExtraneousValues: true, // true시 @Expose()가 없는 속성 모두 제거
};

interface Util {
  toInstance<T, V>(
    cls: ClassConstructor<T>,
    plain: V[],
    options?: ClassTransformOptions,
  ): T[];
  toInstance<T, V>(
    cls: ClassConstructor<T>,
    plain: V,
    options?: ClassTransformOptions,
  ): T;
  toInstance<T>(
    clazz: ClassConstructor<T>,
    plain: number,
    option?: ClassTransformOptions,
  ): T | undefined;
  toInstance<T, V>(
    cls: ClassConstructor<T>,
    plain: V | V[],
    options?: ClassTransformOptions,
  ): T | T[] | undefined;

  /**
   *  val === null || val === undefined 경우만 true를 리턴한다.
   * @param value
   */
  isNull(value: any): boolean;
  isNull(value: any[]): boolean;
}

export const Util: Util = {
  toInstance<T, V>(
    cls: ClassConstructor<T>,
    plain: V | V[] | number,
    options?: ClassTransformOptions,
  ): T | T[] | undefined {
    if (typeof plain === 'number') {
      plain = plain ? ({ id: plain } as any) : undefined; // 0인 경우
    }

    return plainToInstance(cls, plain, {
      ...classTransformOptions,
      ...options,
    });
  },

  isNull: function (value: any | any[]): boolean {
    const isNull = (val: unknown) => val === null || val === undefined;
    return Array.isArray(value) ? value.every(isNull) : isNull(value);
  },
};
