# Read each line from filenames.txt and create an empty file with that name
while IFS= read -r ./list_comps; do
    touch "$filename"
done < ./list_comps.txt

