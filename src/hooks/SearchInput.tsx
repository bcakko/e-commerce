import React, { useEffect } from 'react';

// import { COMMON_ICON_NAMES } from '@libs/constants/COMMON_ICON_NAMES';
// import { TComponentSizes } from '@libs/constants/COMPONENT_VARIABLES';

// import useStore from '@stores/slices/useStore';

// import useDebounce from '@hooks/useDebounce';

// import IconRenderer from '../IconRenderer';
// import TextInput from '../TextInput';

// type TProps = {
//   id?: string;
//   name: string;
//   placeholder?: string;
//   onChange: (value: string) => void;
//   minLength?: number;
//   delay?: number;
//   value?: string;
//   className?: string;
//   label?: string;
//   componentSize?: TComponentSizes;
//   withIcon?: boolean;
// };

//! SearchInput type   -->  React.forwardRef<HTMLInputElement, TProps>

const SearchInput = (
  (
    // {
    //   id,
    //   name,
    //   placeholder,
    //   onChange,
    //   delay,
    //   minLength,
    //   value = '',
    //   className,
    //   componentSize,
    //   label,
    //   withIcon,
    // },
    // ref
  ) => {
    // const CONFIGS_COMMON = useStore((state) => state.configs?.COMMON);

    // const _delay = delay ?? CONFIGS_COMMON?.SEARCH_FIELD.DELAY;
    // const _minLength = minLength ?? CONFIGS_COMMON?.SEARCH_FIELD.MIN_LENGTH;

    // const [searchTerm, setSearchTerm] = React.useState(value?.toString() ?? '');
    // const debouncedSearchTerm: string = useDebounce<string>(searchTerm, _delay);

    // const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setSearchTerm(event.currentTarget.value);
    // };

    // useEffect(() => {
    //   if (
    //     debouncedSearchTerm?.trim().length === 0 ||
    //     debouncedSearchTerm?.trim().length >= _minLength
    //   ) {
    //     if (onChange) {
    //       onChange(debouncedSearchTerm.trim());
    //     }
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [debouncedSearchTerm, _minLength]);

    return (
      <></>
      // <TextInput
      //   ref={ref}
      //   prefixItem={
      //     withIcon ? <IconRenderer iconName={COMMON_ICON_NAMES.search} /> : null
      //   }
      //   id={id}
      //   name={name}
      //   componentSize={componentSize}
      //   className={className}
      //   placeholder={placeholder}
      //   onChange={handleOnChange}
      //   value={searchTerm}
      //   type="search"
      //   label={label}
      // />
    );
  }
);

export default SearchInput;
