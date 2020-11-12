import {StyleSheet} from 'react-native';
import metrics from './metrics';
import colors from './colors';

export {metrics, colors};

const Slider = StyleSheet.create({
  slider: {
    overflow: 'visible',
  },
});

const Pagination = StyleSheet.create({
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});

const Layout = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const Gradient = StyleSheet.create({
  gradientAbsoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Select = StyleSheet.create({
  Select: {
    maxHeight: 380,
    paddingHorizontal: 16,
    borderTopColor: colors.white,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderBottomColor: colors.white,
  },
  SelectItem: {
    backgroundColor: colors.white,
    padding: 16,
    paddingHorizontal: 24,
    marginVertical: 8,
    borderRadius: 32,
    flex: 1,
    maxHeight: 380,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Button = StyleSheet.create({
  PlayButton: {
    backgroundColor: colors.red,
    height: 100,
    width: 100,
    borderRadius: 48,
  },
});

export default {Layout, Slider, Pagination, Gradient, Select, Button};
