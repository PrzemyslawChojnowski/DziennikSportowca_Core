using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace DziennikSportowca.Helpers.Helpers
{
    public static class JSONHelpers
    {
        public static string ReadJsonStringFromPathFile(string filePath, string element)
        {
            try
            {
                using (StreamReader streamReader = new StreamReader(filePath))
                {
                    String file = streamReader.ReadToEnd();
                    JsonTextReader reader = new JsonTextReader(new StringReader(file));
                    while (reader.Read())
                    {
                        if (reader.Value != null && reader.TokenType == JsonToken.PropertyName && reader.Value.ToString() == element)
                        {
                            reader.Read();
                            return reader.Value.ToString();
                        }
                    }
                }
            }
            catch
            {
                throw;
            }

            return null;
        }
    }
}
