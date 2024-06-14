import {
  ReadStyleResult,
  Style,
  StyleParser,
  UnsupportedProperties,
  WriteStyleResult
} from 'geostyler-style';

import { CartoSymJSONSchema } from './types/schema';

/**
 * This parser can be used with the GeoStyler.
 * It implements the GeoStyler StyleParser interface to work with the json encoding
 * of the OGC styles and symbology encoding.
 *
 * @class SymcoreParser
 * @implements StyleParser
 */
export class SymcoreParser implements StyleParser<CartoSymJSONSchema> {

  public static title = 'OGC Styles and Symbology Parser';

  title = 'OGC Styles and Symbology Parser';

  unsupportedProperties: UnsupportedProperties = {
  };

  readStyle(inputStyle: CartoSymJSONSchema): Promise<ReadStyleResult> {
    return Promise.resolve({
      output: {
        name: '',
        rules: []
      },
      warnings: [],
      errors: []
    });
  }

  writeStyle(geoStylerStyle: Style): Promise<WriteStyleResult<CartoSymJSONSchema>> {
    return Promise.resolve({
      output: {
        stylingRules: []
      },
      errors: [],
      warnings: []
    });
  }

}

export default SymcoreParser;
