# geostyler-symcore-parser

Parser for the [OGC styles and symbology encoding](https://github.com/opengeospatial/styles-and-symbology).

Uses `CartoSym-JSON.schema.json` with hash [de4892c](https://github.com/opengeospatial/styles-and-symbology/blob/de4892cb6e0109c434bea5ab19bc2cdf6ec63f0f/core/schemas/CartoSym-JSON.schema.json)

### development

Translate the schema:
  1. Wrap the toplevel `"$ref": "#/$defs/style"` with `"anyOf": [{ }]`
  2. `npm run translate-schema`

## <a name="funding"></a>Funding & financial sponsorship

Maintenance and further development of this code can be funded through the
[GeoStyler Open Collective](https://opencollective.com/geostyler). All contributions and
expenses can transparently be reviewed by anyone; you see what we use the donated money for.
Thank you for any financial support you give the GeoStyler project 💞

