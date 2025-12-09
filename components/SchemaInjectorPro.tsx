export default function SchemaInjectorPro({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}} />;
}
