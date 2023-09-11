const getRadiusClass = (sort: string) => {
    switch (sort) {
      case 'Simple':
        return 'rounded-sm';
      case 'Round':
        return 'rounded-lg';
      case 'Circle':
        return 'rounded-full';
    }
  }

  export default getRadiusClass;