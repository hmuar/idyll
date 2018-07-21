import createStyles from './styles';

const config = {
  maxWidth: 600,
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: '50px'
};

export default {
  ...config,
  styles: createStyles(config)
};
